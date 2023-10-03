import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 w-full">
      <div className="bg-white w-699 h-664 absolute top-159 left-406 rounded-lg border border-gray-300">
        <div className="bg-gray-800 text-white p-4 relative w-full">
          {/* First Image */}
          <Image
            src="/successful-man.png"
            alt="Successful Man"
            width={305}
            height={305}
            className="w-305 h-305 absolute -top-16 left-0"
          />
          {/* Second Image (overlapping with first using z-index) */}
          <Image
            src="/successfully-done.png"
            alt="Successfully Done"
            width={288}
            height={288}
            className="w-288 h-288 absolute -top-8 left-0 z-10"
          />
          {/* Title */}
          <h2 className="text-xl font-semibold mt-16 relative z-20">{title}</h2>
          {/* Subtitle */}
          <p className="text-lg text-gray-300">{message}</p>
          {/* Close Button */}
          <Button className="text-white text-2xl absolute top-4 right-4" onClick={onClose}>
            &times;
          </Button>
          {/* Action Button */}
          <Button
            className="text-white font-semibold w-574 h-53 mt-4 bg-gradient-to-r from-purple-600 via-pink-600 to-pink-500 p-4 flex justify-center"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
