import React from 'react'
import Side from "@/components/side-content";
import SideImage from "@/components/side-image";
import NavigationMenuDemo from '@/components/navbar';
import Bulb from '@/components/bulbImage';
import Lady from '@/components/ladySitting';
import Thirdside from '@/components/thirdSide'
import FourthSide from '@/components/fourthSide';
import AlternateReverseTimeline from '@/components/Timeline';
import Rewards from '@/components/Rewards';
import Partners from '@/components/Partners';
import Privacy from '@/components/Privacy';


const landingPage = () => {
  return (
    <><>
      <NavigationMenuDemo />
      <Side />
      <SideImage />
      {/* Add a horizontal line (divider) */}
      <div className="divider"></div>
    </>
    <Bulb />
    {/* Add a horizontal line (divider) */}
    <div className="divider"></div>
    <Lady/>
    <div className="divider"></div>
    <Thirdside/>
    <div className="divider"></div>
    <FourthSide/>
    <div className="divider"></div>
    <AlternateReverseTimeline/>
    <div className="divider"></div>
    <Rewards/>
    <div className="divider"></div>
    <Partners/>
    <div className="divider"></div>
    <Privacy/>
    </>
  )
}

export default landingPage;
