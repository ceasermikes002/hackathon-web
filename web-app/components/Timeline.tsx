"use client"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Image from 'next/image';

export default function OppositeContentTimeline() {
  return (
    <><div className=' text-center justify-center pb-10'>
      <h1 className='py-5 text-2xl text-white font-bold'>Timeline</h1>
      <p>Here is the breakdown of the time we anticipate
        <br /> using for the upcoming event.</p>
    </div>
    <div>
      <Image
      src={'/star2.png'}
      width={20}
      height={20}
      alt='img'
      className='relative left-96'
      />
      <Image
      src={'/star3.png'}
      width={20}
      height={20}
      alt='img'
      />
    <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <h1 className='text-purple-600 font-bold text-2xl'>Hackathon Announcement</h1>
            <p>The getlinked tech hackathon 1.0 is formally announced
              <br /> to the general public and teams begin to get ready to register</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className='text-purple-600 font-bold text-2xl'>November 18,2023</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <h1 className='text-purple-600 font-bold text-2xl'>Team registration begins</h1>
            <p>Interested teams can now show their interest in the
              <br /> getlinked tech hackathon 1.0 2023 by proceeding to register</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className='text-purple-600 font-bold text-2xl'>November 18,2023</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <h1 className='text-purple-600 text-2xl font-bold'>Teams Registration ends</h1>
            <p>Interested Participants are no longer Allowed to register</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className='text-purple-600 text-2xl font-bold'>November 18, 2023</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <h1 className='text-purple-600 text-2xl font-bold'>Announcement of the accepted teams and ideas</h1>
            <p>All teams whom idea has been accepted into getlinked tech
              <br /> hackathon 1.0 2023 are formally announced</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className='text-2xl font-bold text-purple-600'>November 18,2023</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <h1 className='text-purple-600 text-2xl font-bold'>Getlinked Hackathon 1.0 Offically Begins</h1>
            <p>Accepted teams can now proceed to build
              <br /> their ground breaking skill driven solutions</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary'/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className='text-2xl font-bold text-purple-600'>November 18,2023</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className='text-2xl font-bold text-purple-600'>
            November 18,20203
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h1 className='text-2xl font-bold text-purple-600'>Demo Day</h1>
            <p>Teams get the opportunity to pitch their projects to judges. <br />
              The winner of the hackathon will also be announced on this day</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>  
      <Image
      src={'/star.png'}
      width={20}
      height={20}
      alt='img'
      />
    </div></>
  );
}
