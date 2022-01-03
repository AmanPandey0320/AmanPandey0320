import { useState, useEffect, useRef } from "react";

/**
 * @description hook to track scroll
 * @returns
 */
export function useScroll() {
  // storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // the offset of the document.body
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  // the vertical direction
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  // the horizontal direction
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  // scroll direction would be either up or down
  const [scrollDirection, setScrollDirection] = useState("");
  const isMounted = useRef(false);

  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    if (isMounted.current) {
      setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    } else {
      isMounted.current = true;
    }
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}
