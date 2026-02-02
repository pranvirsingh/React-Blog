import { useState, useEffect } from "react";
import { useStoreActions } from "easy-peasy";
const useWindowSize = () => {
  //   const [windowSize, setWindowSize] = useState({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });

  const setWindowSize = useStoreActions((a) => a.setWindowSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWindowSize]);
};

export default useWindowSize;
