"use client"
import React from 'react'
import { useParams } from 'next/navigation'

function page() {
  const route= useParams();
  console.log(route)
  return (
    <div>
      {route?.slug}
      
    </div>
  )
}

export default page
