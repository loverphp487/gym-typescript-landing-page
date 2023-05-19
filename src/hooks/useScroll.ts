import { useState, useEffect } from "react";

const useScroll = () => {
  const [changeColor, setChangeColor] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let element = document.querySelector(".benefits") as HTMLDivElement;
      let bodyRect = document.body?.getBoundingClientRect();
      let elemRect = element?.getBoundingClientRect();
      let offset = elemRect?.top - bodyRect?.top;
      Math.ceil(window.pageYOffset) + 20 >= offset
        ? setChangeColor(true)
        : setChangeColor(false);
    });
  }, [changeColor]);
  return changeColor;
};

export default useScroll;
