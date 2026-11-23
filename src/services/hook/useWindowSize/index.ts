"use client";

import React from "react";

type WindowSize = {
  width?: number;
  height?: number;
};

const SERVER_SIZE: WindowSize = { width: undefined, height: undefined };

let cachedSize: WindowSize = SERVER_SIZE;

function subscribe(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

function getSnapshot(): WindowSize {
  const { innerWidth, innerHeight } = window;
  if (cachedSize.width !== innerWidth || cachedSize.height !== innerHeight) {
    cachedSize = { width: innerWidth, height: innerHeight };
  }
  return cachedSize;
}

function getServerSnapshot(): WindowSize {
  return SERVER_SIZE;
}

export function useWindowSize(): WindowSize {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
