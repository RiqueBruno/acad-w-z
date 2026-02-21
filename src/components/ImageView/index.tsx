"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { MdOutlineZoomIn } from "react-icons/md";

interface ImageViewerProps {
  src: string;
  alt: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  const toggleModal = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        onClick={toggleModal}
        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md aspect-square"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <MdOutlineZoomIn className="text-white text-4xl" />
        </div>
      </div>

      {isModalOpen &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 backdrop-blur-md"
            onClick={toggleModal}
          >
            <div
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 z-[10000] text-white hover:text-red-500 transition-colors text-4xl font-bold bg-black/20 rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Fechar"
              >
                ✕
              </button>

              <div className="relative w-full h-[80vh] flex items-center justify-center">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1280px) 90vw, 80vw"
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default ImageViewer;
