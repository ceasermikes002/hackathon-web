import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button';
import Link from 'next/link';

const Thirdside = () => {
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

    return (
        <div style={containerStyle} className='py-0 my-5'>
        <div style={bulbStyle}>
          <Image
            width={700}
            height={700}
            alt='bulb'
            src="/manlady.png"
            className='py-10 px-28'
          />
        </div>
        <div>
          <h1 className='text-4xl font-bold py-4'>Judging Criteria<br /><span className='text-purple-600'> Key attributes </span></h1>
          <p><span className='text-purple-500 font-semibold'> Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. 
          <br />Consider whether it addresses a real-world problem in a novel way or introduces <br /> innovative features.</p>
          <br />
          <p><span className='text-purple-500 font-semibold'> Functionality:</span> Assess how well the solution works. Does it perform its intended <br /> functions effectively and without major issues? Judges would consider the <br /> completeness and robustness of the solution.</p>
          <br />
          <p><span className='text-purple-500 font-semibold'> Impact and Relevance:</span> Determine the potential impact of the solution in the real world. <br /> Does it address a significant problem, and is it relevant to the target audience?
          <br /> Judges would assess the potential social, economic, or environmental benefits.</p>
          <br />
          <p><span className='text-purple-500 font-semibold'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges  <br /> consider the complexity of the code, the use of advanced technologies or algorithms,
          <br /> and the scalability of the solution.</p>
          <br />
          <p><span className='text-purple-500 font-semibold'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, <br />
           and any other competition-specific.</p>
           <br />
           <br />
           <Button
        variant="outline"
        className="w-48 h-12 bg-gradient-to-r from-[#f034c2] via-[#c137e0] to-[#d434fe] "
        size="default"
        asChild
      >
        <Link href={"/register"}>Read More</Link>
      </Button>
        </div>
      </div>
  );
}

export default Thirdside