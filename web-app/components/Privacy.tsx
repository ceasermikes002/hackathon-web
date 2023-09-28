import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faBurst, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from './ui/button';
import Image from 'next/image';

const Privacy = () => {
  return (
    <div className="flex py-20">
      {/* Left side with non-image content */}
      <div className="flex-1 p-20">
        <h1 className='text-2xl font-bold'>
          Privacy Policy and <br /><span className='text-purple-600'>Terms</span>
        </h1>
        <br />
        <br />
        <p className='text-muted-foreground'>Last updated on September 12, 2023</p>
        <br />
        <br />
        <p>
          Below are our privacy & policy, which outline a lot of goodies.
          <br /> it’s our aim to always take care of our participants
        </p>
        <br />
        <br />
        <div className='box-border border-purple-600 h-fit w-fit p-4 border-2 justify-center items-center'>
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy
            <br /> and are committed to protecting your personal information.
            <br /> This Privacy Policy outlines how we collect, use, disclose,
            <br /> and safeguard your data when you participate in our tech
            <br /> hackathon event. By participating in our event, you consent
            <br /> to the practices described in this policy.
          </p>

          <h2>Licensing Policy</h2>
          <p>Here are terms of our Standard License:</p>
          <div className='flex gap-5 py-7'>
            <FontAwesomeIcon icon={faCheck} className='w-5 h-5 text-green-600' />
            <p className='text-muted-foreground'>The Standard License grants you a non-exclusive right to
              <br /> navigate and register for our event</p>
          </div>
          <div className='flex gap-5'>
            <FontAwesomeIcon icon={faCheck} className='w-5 h-5 text-green-600' />
            <p className='text-muted-foreground'>You are licensed to use the item available at any free source
              <br /> sites, for your project development</p>
          </div>
          <br />
          <Button
            variant="outline"
            className="w-48 h-12 bg-gradient-to-r from-[#f034c2] via-[#c137e0] to-[#d434fe]"
            size="default"
          >
            Register
          </Button>
        </div>
      </div>

      {/* Right side with overlaid images */}
      <div className="relative flex-1">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={'/man-standing-on-padlock.png'}
            alt='img'
            width={559}
            height={749}
            layout="responsive"
            style={{ zIndex: 1 }} // Set z-index to 1 to bring this image to the front
          />
        </div>
        <Image
          src={'/Vector.png'}
          alt='img'
          width={459}
          height={649}
          layout="responsive"
          style={{ zIndex: 0 }} // Set z-index to 0 to send this image to the back
        />
      </div>
    </div>
  );
};

export default Privacy;
