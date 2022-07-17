import React from "react";
import { useHover } from "../../customHook/customhook";

const Blog = () => {
  const { hover, nodeRef } = useHover();
  return (
    <div className="entry-content">
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        perferendis sint molestias non soluta molestiae sunt
      </p>
      <a
        href="https://www.facebook.com/campaign/landing.php?campaign_id=13278191501&extra_1=s%7Cc%7C525293413664%7Ce%7Cfb%7C&placement=&creative=5252934"
        className={`underline ${hover ? "text-red-400" : ""}`}
        ref={nodeRef}>
        Jacki-chan
      </a>
    </div>
  );
};

export default Blog;
