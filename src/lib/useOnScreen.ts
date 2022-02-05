import { useEffect, useState } from "react";

export default function (ref: any) {
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
