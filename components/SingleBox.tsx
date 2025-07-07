"use client";
import React, { useRef, useEffect, useState } from "react";

interface SingleBoxProps {
  imageSrc: string;
  description: string;
}
const SingleBox: React.FC<SingleBoxProps> = ({ imageSrc, description }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageWidth, setImageWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleImageLoad = () => {
      if (imageRef.current) {
        setImageWidth(imageRef.current.offsetWidth);
      }
    };

    const img = imageRef.current;
    if (img && img.complete) {
      handleImageLoad(); // already loaded
    } else if (img) {
      img.addEventListener("load", handleImageLoad);
    }

    return () => {
      if (img) {
        img.removeEventListener("load", handleImageLoad);
      }
    };
  }, []);

  return (
    <div className="w-fit h-auto">
      <div className="w-fit">
        <img
          ref={imageRef}
          src={imageSrc}
          className="h-[450px] w-auto rounded-2xl object-cover"
          alt="Noise exposure awareness"
        />
      </div>
      <p className="mt-4 text-lg font-semibold w-[450px]">{description}</p>
    </div>
  );
};

export default SingleBox;
