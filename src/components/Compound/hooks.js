import { useEffect, useRef } from "react";

export function useEffectSkipMount(cb, deps) {
  const mounted = useRef(true);

  useEffect(() => {
    if (!mounted.current) {
      return cb();
    } else {
      mounted.current = false;
    }
  }, [...deps]);
}