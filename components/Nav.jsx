import Link from 'next/link'
import React from 'react'
import logo from '../public/next.svg'
import Image from 'next/image'
export default function Nav() {
    return (
        <nav className='relative container bg-slate-100 mx-auto p-6'>
            <div className='flex items-center justify-between'>
                <div className='pt-2'>
                    <Link href="/">
                        <div className="flex hover:text-slate-500">
                            <Image src={logo} width={50} height={50} />
                            <h1 className='text-4xl font-bold'>My App</h1>
                        </div>
                    </Link>
                </div>
                    <div className="md:flex space-x-6 drop-shadow-xl">
                        <Link href='/' className='text-xl hover:text-slate-500 capitalize'>Home</Link>
                        <Link href='#about' className='text-xl hover:text-slate-500 capitalize'>about</Link>
                        <Link href='#service' className='text-xl hover:text-slate-500 capitalize'>service</Link>
                        <button className='bg-indigo-500 hover:bg-indigo-600 text-white rounded-full py-2 px-10 font-bold'>Contact</button>
                    </div> 
            </div>
        </nav>
    )
}
