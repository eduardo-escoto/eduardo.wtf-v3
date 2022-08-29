import Head from 'next/head'
import Image from 'next/image'
import ThemeSwitch from '../components/ThemeSwitch'

export default function Home() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='col-span-1'>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <ThemeSwitch />
      </div>
      <div className='col-span-2'>
        <h1>siadofjoaisd</h1>
      </div>
    </div>
  )
}
