import { useEffect, useState } from "react";

function useOnScreen (ref: any) {
  const [inView, setInView] = useState(false);
  const observer = new IntersectionObserver(([entry]) => {
    setInView(entry.isIntersecting);
  });

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      setInView(false);
      observer.disconnect();
    };
  }, []);
  return inView;
}

export default useOnScreen;