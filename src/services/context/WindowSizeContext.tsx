"use client";

import React from "react";
import { useWindowSize } from "@/services/hook/useWindowSize";
import { mobileWidth, tabletPortraitWidth } from "@/services/const";

type WindowSizeContextType = {
  width?: number;
  height?: number;
  isMobile: boolean;
  isTablet: boolean;
  mounted: boolean;
};

const WindowSizeContext = React.createContext<WindowSizeContextType>({
  width: undefined,
  height: undefined,
  isMobile: false,
  isTablet: false,
  mounted: false,
});

export function WindowSizeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width, height } = useWindowSize();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <WindowSizeContext.Provider
      value={{
        width,
        height,
        isMobile: width === undefined ? false : width <= mobileWidth,
        isTablet: width === undefined ? false : width <= tabletPortraitWidth,
        mounted,
      }}
    >
      {children}
    </WindowSizeContext.Provider>
  );
}

export const useWindowSizeContext = () => React.useContext(WindowSizeContext);
