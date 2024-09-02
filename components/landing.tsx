import { BorderBeam } from '@/components/ui/border-beam'
import DotPattern from '@/components/ui/dot-pattern'
import React from 'react'

const Landing = () => {
  return (
    <main className='flex justify-center items-center h-screen text-white bg-zinc-950'>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className='[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] '
      />
      <div className='relative h-fit w-fit p-[50px] md:p-[250px] rounded-xl bg-zinc-950 border-zinc-500/10 border'>
        <BorderBeam />
        <div className='flex justify-center text-center items-center'>
          <h1 className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
            HyperText
          </h1>
        </div>
      </div>
    </main>
  )
}

export default Landing
