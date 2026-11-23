"use client";

import React from "react";
import { useWindowSize } from "@/services/hook/useWindowSize";
import { mobileWidth, tabletPortraitWidth } from "@/services/const";

type WindowSizeContextType = {
  isMobile: boolean;
  isTablet: boolean;
};

const WindowSizeContext = React.createContext<WindowSizeContextType>({
  isMobile: false,
  isTablet: false,
});

/**
 * Exposes viewport breakpoints for behaviour only (animations).
 * Layout must stay in CSS media queries: values are `false` during SSR.
 */
export function WindowSizeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width } = useWindowSize();

  const value = React.useMemo(
    () => ({
      isMobile: width !== undefined && width <= mobileWidth,
      isTablet: width !== undefined && width <= tabletPortraitWidth,
    }),
    [width]
  );

  return (
    <WindowSizeContext.Provider value={value}>
      {children}
    </WindowSizeContext.Provider>
  );
}

export const useWindowSizeContext = () => React.useContext(WindowSizeContext);
