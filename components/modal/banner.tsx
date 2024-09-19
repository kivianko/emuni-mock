"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface BannerProps {
  imageSrc: string;
  altText: string;
}

export default function Banner({ imageSrc, altText }: BannerProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // コンポーネントがマウントされた後に表示する
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <Image src={imageSrc} alt={altText} width={200} height={150} layout="responsive" className="rounded-lg" />
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition-all duration-200"
          aria-label="Close banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
