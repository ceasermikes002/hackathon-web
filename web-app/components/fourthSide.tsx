import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

const FourthSide = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-4 pt-20 mx-8">
        <h1 className='text-4xl font-bold'>Frequently Asked <span className='text-purple-600 '>Questions</span></h1>
        <br />
        <p className='pb-8'>We got answers to the questions that you might <br />
         want to ask about getlinked Hackathon 1.0</p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1"className=' border-purple-600'>
            <AccordionTrigger>Can I work on a project I started before the hackathon?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2"className=' border-purple-600'>
            <AccordionTrigger>What happens if I need help during the hackathon?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3"className=' border-purple-600'>
            <AccordionTrigger>What hapens if I do not have an idea for a project?</AccordionTrigger>
            <AccordionContent>
              Yes.It is animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4"className=' border-purple-600'>
            <AccordionTrigger>Can I join a team or do I have to come with one?</AccordionTrigger>
            <AccordionContent>
              Yes.It is animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5"className=' border-purple-600'>
            <AccordionTrigger>What hapens after the hackathon ends?</AccordionTrigger>
            <AccordionContent>
              Yes.It is animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className=' border-purple-600'>
            <AccordionTrigger>What hapens after the hackathon ends?</AccordionTrigger>
            <AccordionContent>
              Yes.It is animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="pb-12">
        <Image
          width={40}
          height={40}
          src={'/questionmark.png'} alt={''}
          className='relative inset-5 top-20'
          />
        <Image
          width={60}
          height={60}
          src={'/questionmark2.png'} alt={''} 
          className='relative inset-5 left-36'
          />
        <Image
          width={40}
          height={40}
          src={'/questionmark3.png'} alt={''}
          className='relative inset-5 top-50 left-96'
          />
        <Image
          width={600}
          height={600}
          src={'/man-thinking.png'}
          alt={''}
          className="max-w-full" 
        />
        </div>
    </div>
  );
};

export default FourthSide;
