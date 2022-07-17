import { useEffect, useRef, useState } from "react";

const useLinkNewTab = () => {
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef) {
      const links = contentRef.current.querySelectorAll("a");
      console.log("links:", links);
      links.length > 0 &&
        links.forEach((item) => {
          item.setAttribute("target", "_blank");
        });
    }
  });
  return {
    contentRef,
  };
};
const useHover = ()=>{
  const [hover, setHover] = useState(false);
  const nodeRef = useRef(null);
  useEffect(()=>{
    const dom = nodeRef.current;
    const handleMouseover = ()=>{
      setHover(true)
    }
    const handleMouseout = ()=>{
      setHover(false);
    }
    if(dom.current) {
      dom.addEventListener("mouseover", handleMouseover);
      dom.addEventListener("mouseout", handleMouseout);
    }
    return ()=>{
      dom.removeEventListener("mouseover", handleMouseover);
      dom.removeEventListener("mouseout", handleMouseout);
    }
  })
  return {
    hover,
    nodeRef,
  };
}

export { useLinkNewTab, useHover };
