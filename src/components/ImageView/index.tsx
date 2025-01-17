'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MdOutlineZoomIn } from 'react-icons/md';

interface ImageViewerProps {
  src: string;
  alt: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative group">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="object-cover rounded-lg"
      />
      <button
        onClick={toggleModal}
        className="absolute inset-0 group-hover:opacity-0 flex items-start justify-end text-white text-lg md:hidden font-semibold transition-opacity duration-300 rounded-lg hover:bg-black/50"
      >
        <MdOutlineZoomIn />
      </button>
      <button
        onClick={toggleModal}
        className="absolute hidden inset-0 bg-black/50 opacity-0 group-hover:opacity-100 md:flex items-center justify-center text-white text-sm md:text-4xl font-semibold transition-opacity duration-300 rounded-lg"
      >
        <MdOutlineZoomIn />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center mt-10">
          <div className="relative">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={800}
              className="rounded-lg"
            />
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-lg p-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
