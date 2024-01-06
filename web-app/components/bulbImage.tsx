import Image from 'next/image';
import React from 'react';

const Bulb = () => {
  const containerStyle = {
    display: 'flex', // Use flex to display elements side by side
    alignItems: 'center', // Center vertically
    width: '100vw',
    height: '100vh',
  };

  const bulbStyle = {
    flex: '0 0 auto', // Don't allow image to grow or shrink
    marginRight: '20px', // Add spacing between image and text
  };
    const arrowStyle = {
    position: 'absolute',
    top: 1460,
    right: 900,
  };

  return (
    <div style={containerStyle} className='py-0'>
      <div style={bulbStyle}>
        <Image
          width={700}
          height={700}
          alt='bulb'
          src="/idea-bulb.png"
          className='py-10 px-28'
        />
          <Image
        style={arrowStyle}
        width={60}
        height={60}
        alt='arrow'
        src="/arrow.png" />
      </div>
      <div>
        <h1 className='text-4xl font-bold py-4'>Introduction to getlinked <br /><span className='text-purple-600'>tech Hackathon 1.0</span></h1>
        <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as <br /> clear as day, to shape the future. Whether you&apos;re a coding genius, a  <br />design maverick, or a concept wizard, you&apos;ll have the chance to transform your <br /> ideas into reality. Solving real-world problems, pushing the boundaries <br /> of technology, and creating solutions that can change the world, <br /> that&apos;s what we&apos;re all about!</p>
      </div>
    </div>
  );
}

export default Bulb;
