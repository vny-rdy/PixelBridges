/* eslint-disable no-unused-vars */
import React from 'react';
import group from '../../assets/diff.png';

const ProjectVision2 = () => {
  return (
    <div className=''>
      
      <div className='bg-antiDiagonal h-[26vh] relative'></div>
      
      <div className="relative">
        <div className="h-[40vh] bg-yellow-400"></div>
        <img 
          src={group} 
          alt="group" 
          className="w-[80%] m-auto absolute top-[10%] left-[10%] transform -translate-y-1/2" 
        />
        <div className='h-[20vh] bg-yellow-400 flex justify-center items-center'>
          <p className='font-monst font-bold text-2xl text-slate-800 text-center mt-20 mx-14 '>
            Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
          </p>
        </div>
      </div>

      
    </div>
  );
}

export default ProjectVision2;
