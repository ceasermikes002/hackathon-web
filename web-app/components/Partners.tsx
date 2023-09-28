import Image from 'next/image';
import React from 'react';

const Partners = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-2xl font-bold py-5'>Partners and Sponsors</h1>
      <p className='py-5'>
        Getlinked Hackathon 1.0 is honored to have the following major
        <br /> companies as its partners and sponsors
      </p>
      <Image
        src={'/sponsors.png'}
        alt='img'
        width={692}
        height={494}
        className='mx-auto py-10'
      />
    </div>
  );
};

export default Partners;
