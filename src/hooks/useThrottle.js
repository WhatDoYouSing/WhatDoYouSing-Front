import { useRef, useCallback } from "react";

function useThrottle(callback, delay) {
  const lastRan = useRef(Date.now());

  const throttledFunc = useCallback(
    (...args) => {
      const now = Date.now();
      if (now - lastRan.current > delay) {
        callback(...args);
        lastRan.current = now;
      }
    },
    [callback, delay]
  );

  return throttledFunc;
}

export default useThrottle;
