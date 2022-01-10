import { useRef } from "react";


export default function useDebouncePromise(fn, delay) {
  let timeoutRef = useRef(null);

  function handler(...params) {
    return new Promise(async (res, rej) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(async () => {
        try {
          const response = await fn(...params);
          res(response)
        } catch (e) {
          rej(e);
        }
      }, delay);
    });
  }
  return handler;
}