import { useRef, useState } from "react";
import "../styles/Image.css";

export const Image = ({
  src = "",
  alt = "",
  height,
  children,
  fixed = false,
}) => {
  const box = useRef(null);
  const img = useRef(null);

  return (
    <div
      ref={box}
      className="image-box"
      style={{ height: height || undefined }}
    >
      {fixed ? (
        <div
          className="image-bg dark-overlay"
          style={{
            backgroundImage: `url(${src})`,
            height: height || undefined,
          }}
        />
      ) : (
        <img ref={img} className="image-behind" src={src} alt={alt} />
      )}
      {Boolean(children) && <div className="image-content">{children}</div>}
    </div>
  );
};
