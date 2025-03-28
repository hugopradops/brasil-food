"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ImageModal({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        className="cursor-pointer rounded-md"
        onClick={() => setIsOpen(true)}
      />

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Transparent overlay */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsOpen(false)} // Close modal on overlay click
          ></div>

          {/* Centered image */}
          <div className="relative z-10 p-4">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={800}
              className="rounded-lg shadow-lg object-contain w-auto h-auto max-w-[70vw] max-h-[70vh]"
            />
            <button
              className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}