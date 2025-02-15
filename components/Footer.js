import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="max-w-screen bg-gradient-to-t from-black to-black/95 text-white">
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex justify-center items-end gap-4 px-4">
          <Link href="https://www.facebook.com/djkri">
            <div className="cursor-pointer hover:text-gray-500 hover:scale-110 transition-transform">
              <BsFacebook size={25} />
            </div>
          </Link>
          <Link href="https://www.instagram.com/krisamadhi/">
            <div className="cursor-pointer hover:text-gray-500 hover:scale-110 transition-transform">
              <BsInstagram size={25} />
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-center p-4 text-sm sm:text-lg cursor-pointer hover:text-gray-500 hover:scale-110 transition-transform">
          <p>
            <Link href="/">Sky Audio Mastering ©</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
