import { useEffect, useRef } from 'react'
import background from '../../assets/Rectangle 5.png'
import gamess from '../../assets/games.png'
import './game.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import upcoming from '../../assets/upcoming.png';
import ritarrow from '../../assets/RightArrow.png'
import game1 from '../../assets/Alabay Games/alabay guard prev 2 1.png';
import game2 from '../../assets/Alabay Games/alabay lost heritage prev 1.png';
import { FaArrowRightLong } from "react-icons/fa6";

import { useNavigate } from 'react-router-dom';
const Game = () => {
    const gameRef = useRef(null);
    const interval=3000;
    const navigate =useNavigate();
    const handleNextSlide = () => { 
        if(gameRef){
          gameRef.current.next();
        }
       };
      const handleGamePrev1Click = () => { 
        navigate('/gamepreview1')
       }
       const handleGamePrev2Click = () => { 
        navigate('/gamepreview2')
       }
       useEffect(() => { 
        const timer =setInterval(() => { 
          handleNextSlide();
         },interval);
         return () => clearInterval(timer);
        },[interval]);

  return (
    <div className='h-[150vh] bg-white'>
        <div>
        <img src={background} alt="" className='absolute top-[350%] z-0' />
        <img src={gamess} alt="" className=' m-auto w-2/5 shadow-none pt-[15%] z-10' />
        <img src={upcoming} alt="" className=' m-auto w-3/5 shadow-none pt-[7%] z-20 pb-28 ' />
        <Carousel indicators={false} controls={false} interval={null} ref={gameRef} className='w-3/4 m-auto absolute top-[-70%] max-[1279.99px]:top-[-80%] left-0 z-30'>
      
      <Carousel.Item >
        <div className='relative'>
        <img src={game1} alt="First slide" className='w-full h-auto rounded-3xl border-[2px] border-white' />
            <div className='discover1 absolute flex items-center gap-2 justify-center z-20 bg-purple-500 text-center rounded-3xl py-2 w-36 left-1/2 transform -translate-x-1/2 top-[80%] cursor-pointer hover:w-[147px]' onClick={handleGamePrev1Click}>
        <button className='text-white text-lg font-semibold'>Discover
        </button>
        <FaArrowRightLong className='text-white font-semibold'/>
            </div>
        </div>
        {/* <bHBg text="First slide" src={bHBg} /> */}
        
        
        
      </Carousel.Item>
      <Carousel.Item >
        <div className='relative'>
        <img src={game2} alt="First slide" className='w-full h-auto rounded-3xl border-[2px] border-white' />
            <div className='discover2 absolute flex items-center gap-2 justify-center z-20 bg-green-500 text-center rounded-3xl py-2 w-36 left-1/2 transform -translate-x-1/2 top-[80%] hover:w-[147px]' onClick={handleGamePrev2Click}>
        <button className='text-white text-lg font-semibold'>Discover
        </button>
        <FaArrowRightLong className='text-white font-semibold'/>
            </div>
        </div>
        {/* <bHBg text="First slide" src={bHBg} /> */}
        
        
        
      </Carousel.Item>
     
    </Carousel>
    <img src={ritarrow} alt="" onClick={handleNextSlide} className='arrows w-14 cursor-pointer absolute top-[417%] right-[5%] rounded-full z-40'/>
        </div>
        
    </div>
  )
}

export default Game;