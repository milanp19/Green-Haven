import Image from 'next/image'
import {BsDot} from 'react-icons/bs'

export default function Home() {
  return (
    <main className="home_gradient relative w-full h-full">

      <div className='flex justify-between'>
        <h1 className="mt-36 ml-20 hero_green relative after:content-['Haven'] after:text-black after:text-8xl after:absolute after:top-14 font-semibold">Green</h1>
        <Image src="/Logo.png" alt='logo' width={400} height={200} className='mt-0 mr-20'/>
      </div>

      <p className='mt-16 text-start w-fit m-auto text-2xl text-[#434343]'>Inspiring Sustainable Living: Where Eco Friendly Designs Meet Ethical Architecture. <br /> Your Journey to Greener, Smarter Home Begins Here.</p>

      <div className='flex justify-center gap-40 mt-20'>
        <div className='flex flex-col gap-4 text-2xl'>
          <span className='m-auto text-4xl text-slate-400'><BsDot  /></span>
          Reduce
        </div>
        <div className='flex flex-col gap-4 text-2xl'>
          <span className='m-auto text-4xl text-slate-400'><BsDot /></span>
          Reuse
        </div>
        <div className='flex flex-col gap-4 text-2xl'>
          <span className='m-auto text-4xl text-slate-400'><BsDot /></span>
          Recycle
        </div>

      </div>

      <Image src="/treebranch.png" alt="tree image" width={450} height={50} className='absolute -translate-y-36' />
      <Image src="/treebranch.png" alt="tree image" width={500} height={50} className="absolute right-0 -translate-y-44  -scale-x-90" />
      
    </main>
  )
}
