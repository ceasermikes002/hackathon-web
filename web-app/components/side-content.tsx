import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DigitalClock from "./clock";
import Link from "next/link";






const Side = () => {
  return (
    <div className="float-left text-7xl font-bold justify-center px-5  my-40 mx-10 leading-relaxed text-left">
  <span style={{ position: 'relative' }}>
    <Image
    fill
    alt="img"
    src={"/purple-flare.png"}
    />
    <Image
      width={30}
      height={20}
      src={"/Creative.png"}
      alt="Creative 1"
      style={{ position: 'absolute', top: '-35px', left: '480px' }}
    />
    getlinked Tech
  </span>
  <div style={{ display: 'flex', alignItems: 'center'}}>
  Hackathon <span className="text-purple-600">&nbsp;1.0&nbsp;</span>
    <Image
      width={50}
      height={50}
      alt="chain"
      src={"/chain.png"}
    />
    <Image
      width={50}
      height={50}
      alt="fireball"
      src={"/fireball.png"}
    />
  </div>
  <div className="text-muted-foreground text-lg text-white text-left">
  Participate in getlinked tech Hackathon 2023 stand <br /> a chance to win a Big prize
  </div>
       <Link href={'/register'}>
       <Button
        variant="outline"
        className="w-48 h-12 bg-gradient-to-r from-[#f034c2] via-[#c137e0] to-[#d434fe] relative right-7"
        size="default"
      >
        Register
      </Button>
       </Link>
      <DigitalClock />     
</div>
  );
  
};

export default Side;