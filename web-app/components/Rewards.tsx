import Image from 'next/image';
import React from 'react';

const Rewards = () => {
  return (
    <div className='flex flex-col items-center text-center pt-10'>
      <h1 className='text-2xl font-bold ml-40'>Prizes and <br /><span className='text-purple-600'>Rewards</span></h1>
      <br />
      <p className='ml-40'>Highlight of the prizes or rewards for winners <br />and for participants.</p>
      <div className="flex gap-5">
        <Image
          src={'/trophy.png'}
          alt="Trophies"
          width={548}
          height={482}
        />
        <Image
          src={'/Rewards.png'}
          width={692}
          height={494}
          alt='img'
        />
      </div>
    </div>
  );
}

export default Rewards;
