import React from 'react';
import Image from 'next/image';

const sideImage = () => {
  return (
    <div className="flex flex-col items-center pt-28">
      <div className="text-3xl font-semibold my-7 italic">
        Igniting a Revolution in HR <span className="curve-underline">Innovation</span>
      </div>
      <div className="flex justify-end my-20 mx-20">
        <div className="relative h-96 w-96">
          {/* Metrix Image (Background) */}
          <div className="absolute inset-0 z-0">
            <Image
              alt="Empty"
              src="/metrix.png"
              fill
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Purple Gradient Background (in front) */}
          <div className="absolute inset-0 z-20 flex justify-center items-center border-none w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-transparent opacity-80 z-30 w-full h-full"></div>
            <Image
            fill
            alt='ball'
            src={"/ball.png"}
            className=' z-40 mr-9 relative'
            />
            <Image
              alt="Empty"
              src="/hackathon-guy.png"
              width={1500}
              height={1500}
              // layout="fill"
              objectFit="contain"
              className="max-h-full max-w-full h-96 w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default sideImage;
