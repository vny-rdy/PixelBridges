import React from 'react'
import roadmap from '../../assets/1.png'
import roadmapexp from '../../assets/roadmap2.png'
import tokenomics from '../../assets/tokenomics.png'

const Roadmap = () => {
  return (
    <div className=''>
        <div className='bg-yellow-400 h-[20vh] pt-28'>
        <h1 className='font-spicy font-semi-bold text-9xl text-white ml-10'>ROAD MAP</h1>
        
      </div>
      <div className='roadmap_content flex bg-diagonal h-[80vh] items-center justify-around'>
        <div className='font-monst font-bold text-2xl  ml-[10%] mt-16'>
        <p className=' text-slate-800 mb-7 w-4/5'>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store. </p>
        <p className='text-yellow-400 w-4/5'>Join us as we grow and achieve new heights.</p>
        </div>
        
        <img src={roadmap} alt="roadMapPic" className='w-2/5 mt-20 mr-5' />
        </div>
        <div className='bg-white'>
        <img src={roadmapexp} alt="" className='w-10/12 m-auto pt-20' />
        </div>
        <div className='tokenomics'>
            <img src={tokenomics} alt="" className='w-[100%]' />
        </div>
        
      </div>

  )
}

export default Roadmap