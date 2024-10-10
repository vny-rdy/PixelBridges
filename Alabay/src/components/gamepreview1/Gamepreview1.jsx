import React, { useEffect, useState } from 'react';
import './gamepreview1.css';
import steppes from '../../assets/steppes.png';
import { FaCirclePlay } from "react-icons/fa6";
import preview1 from '../../assets/Alabay Games/Alabay Guard prev gradient.png';
import gamepreview from '../../assets/GAME PREVIEW.png';
import pre1 from '../../assets/Alabay Games/Alabay Guard/image 1 alabay guard.png';
import pre2 from '../../assets/Alabay Games/Alabay Guard/image 2 alabay guard.png';
import pre3 from '../../assets/Alabay Games/Alabay Guard/image 3 alabay guard.png';
import last1 from '../../assets/last1.png'
const Gamepreview1 = () => {
  
  // const [opacity, setOpacity] = useState(1);

  // const handleScroll = () => {
  //   const scrollTop = window.scrollY;
  //   const fadeStart = 10; // Scroll position at which fading starts
  //   const fadeEnd = 400;   // Scroll position at which content is fully transparent
  //   const newOpacity = Math.max(0, Math.min(1, (fadeEnd - scrollTop) / (fadeEnd - fadeStart)));
  //   setOpacity(newOpacity);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className="preview">

      <img src={preview1} alt="Background" className='fixed-image' />

    <div className='steppes-image  '>
      <img src={steppes} alt="Steppes" className='' />
      </div>


      <div className="scrollable-content ml-[8%] top-[-35%]" 
      // style={{ opacity }}
      >
        <p className="text-gray-500 text-lg w-[35%] my-10">
          Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
        </p>
        <div className="flex rounded-full bg-purple-500 items-center w-48 cursor-pointer hover:shadow-2xl hover:shadow-purple-800 hover:text-purple-300">
          <FaCirclePlay className="mr-2 ml-4 text-xl cursor-pointer" />
          <p className="mt-3 font-medium cursor-pointer">COMING SOON</p>
        </div>

        {/* Game preview section */}
        <div className="preview-content w-3/4 pt-10">
          <img src={gamepreview} alt="Game Preview" className="gamepreview123 bg-transparent w-1/4" />
          <div className="previewpics flex mt-8">
            <img src={pre1} alt="Preview 1" className='previewPics' />
            <img src={pre2} alt="Preview 2" className='previewPics' />
            <img src={pre3} alt="Preview 3" className='previewPics' />
          </div>
        </div>
        
      </div>
      <img src={last1} alt="" className='w-3/4 ml-[10%] pb-10' />
    </div>
  );
};

export default Gamepreview1;
