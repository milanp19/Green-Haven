import Image from 'next/image'
import React from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <nav className='flex h-10 items-center justify-between p-8'>
        <ul className='flex gap-12 text-xl text-justify text-neutral-700 font-normal'>
            <li><Image src='/GH.png' width={45} height={45} alt="Logo" /></li>
            <li className='hover:cursor-pointer hover:text-slate-400'><a className='' href="/">Home</a></li>
            <li className='hover:cursor-pointer hover:text-slate-400'>Category</li>
            <li><SearchBar /></li>
        </ul>
        <ul className='flex gap-12 text-xl text-justify text-neutral-700 font-normal'>
            <li className='hover:cursor-pointer hover:text-slate-400'><a href="/contact">Contact</a></li>
            <li className='hover:cursor-pointer hover:text-slate-400'><a href="login">Log In</a></li>
            
        </ul>
    </nav>
  )
}

export default Navbar