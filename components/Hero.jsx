import React from 'react'
import heroImage from '../public/img/Hero-img.png'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='bg-slate-100 p-5'>
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left capitalize'>Digital agancy</h1>
          <p className="max-w-sm text-center text-slate-500 md:float-left">Quickly Grow Your Business And boost up your sale with professional startup  settings</p>
          <button className='bg-indigo-500 hover:bg-indigo-600 text-white rounded-full w-1/2 cursor-pointer py-2 px-10 font-bold capitalize'>Get started</button>
        </div>
        <div className="">
          <Image src={heroImage} height={500} width={500} />
        </div>
      </div>
    </section>
  )
}
