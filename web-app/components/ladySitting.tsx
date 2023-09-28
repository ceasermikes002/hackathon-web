import Image from 'next/image';
import React from 'react';

const Lady = () => {
  const containerStyle = {
    display: 'flex', // Use flex to display elements side by side
    alignItems: 'center', // Center vertically
    width: '100vw',
    height: '100vh',
  };

  const ladyStyle = {
    flex: '0 0 auto', // Don't allow image to grow or shrink
    marginRight: '20px', // Add spacing between image and text
  };

  return (
    <div style={containerStyle} className='py-0'>
      <div className='py-10 px-28'>
        <h1 className='text-4xl font-bold py-4 '>Rules and <br /><span className='text-purple-600'>Guidelines</span></h1>
        <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as <br /> clear as day, to shape the future. Whether you are a coding genius, a  <br />design maverick, or a concept wizard, you wll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world,  that is what we are all about!</p>
      </div>
      <div style={ladyStyle}>
        <Image
          width={700}
          height={700}
          alt='bulb'
          src="/lady-sitting.png"
          className='py-10 px-28'
        />
      </div>
    </div>
  );
}

export default Lady;
