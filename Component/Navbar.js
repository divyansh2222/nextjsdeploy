import React from 'react';
import Link from 'next/link'


function Navbar() {
  return (
    <div  >
      <div>
         <h1>Facebook</h1>
      </div>
     <div className="flex  gap-4 justify-between px-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
