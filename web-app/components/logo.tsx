import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
   <Link href={'/'}>
   <div className="text-4xl font-bold">get<span className="text-purple-600">linked</span>
    </div>
   </Link>
   
  )
}

export default Logo