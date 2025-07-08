"use client";

import { useEffect, useState } from "react";

type Platform = "mac" | "windows" | "other" | null;

export function usePlatform(): Platform {
  const [platform, setPlatform] = useState<Platform>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.includes("macintosh") || userAgent.includes("mac os x")) {
      setPlatform("mac");
    } else if (userAgent.includes("windows")) {
      setPlatform("windows");
    } else {
      setPlatform("other");
    }
  }, []);

  return platform;
}
