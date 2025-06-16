"use client"
import React from 'react'

const page = ({params}) => {

  const { id } = React.use(params); 
  return (
    <div className='flex flex-col gap-6 items-center justify-center h-screen'>
      <h1>Profile Page</h1>
      <p>Profile ID : {id}</p>
    </div>
  )
}

export default page
