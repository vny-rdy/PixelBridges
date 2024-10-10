import { useEffect, useRef } from 'react'
import merchand from '../../assets/merchandise.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import bHBg from '../../assets/Alabay Merch/black hoodie bck.png'
import bH from '../../assets/Alabay Merch/black hoodie.png'
import bCapBg from '../../assets/Alabay Merch/blue cap bck.png'
import cap from '../../assets/Alabay Merch/cap mockup.png'
import pTeeBg from '../../assets/Alabay Merch/pink tee bck.png'
import pT from '../../assets/Alabay Merch/pink tshirt.png'
import yTeeBg from '../../assets/Alabay Merch/yellow tee bck.png'
import yT from '../../assets/Alabay Merch/yellow tshirt.png'
import rytArrow from '../../assets/rytArrow.png'
import lftArrow from '../../assets/lftArrow.png'
function Merchandise() {
  const bgCarouselRef = useRef(null);
  const frontCarousel = useRef(null);
  const interval=2000;
  const handleNextSlide = () => { 
    if(bgCarouselRef && frontCarousel){
      bgCarouselRef.current.next();
      frontCarousel.current.next();
    }
   };
   const handlePreviousSlide =()=>{
    if(bgCarouselRef && frontCarousel){
    bgCarouselRef.current.prev();
    frontCarousel.current.prev();
    }
  }
   useEffect(() => { 
    const timer =setInterval(() => { 
      handleNextSlide();
     },interval);
     return () => clearInterval(timer);
    },[interval]);
  return (
    <div className='bg-white h-[120vh] relative'>
      <img src={merchand} alt="" className='w-1/2 m-auto pb-28'/>
       <Carousel fade indicators={false} controls={false} interval={null} ref={bgCarouselRef} className='w-3/4 m-auto rounded-2xl absolute top-0 left-0 z-1'>
      
      <Carousel.Item className='rounded-xl' >
        {/* <bHBg text="First slide" src={bHBg} /> */}
        <img src={bHBg} alt="First slide" className='rounded-3xl' />
        
      </Carousel.Item>
      <Carousel.Item>
        {/* <bCapBg text="Second slide" src={bCapBg}/> */}
        <img src={bCapBg} alt="" className='rounded-3xl' />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={pTeeBg} alt="" className='rounded-3xl' />
        <Carousel.Caption>


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={yTeeBg} alt="" className='rounded-3xl'/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
         <Carousel indicators={false} controls={false} interval={null} ref={frontCarousel} className='w-3/4 m-auto absolute top-[-70%] max-[1279.99px]:top-[-80%] left-0 z-10'>
      
      <Carousel.Item >
        {/* <bHBg text="First slide" src={bHBg} /> */}
        <img src={bH} alt="First slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        {/* <bCapBg text="Second slide" src={bCapBg}/> */}
        <img src={cap} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={pT} alt="" />
        <Carousel.Caption>


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={yT} alt="" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    <img src={lftArrow} alt="" onClick={handlePreviousSlide} className='arrows ml-12 w-12 cursor-pointer absolute top-[50%] left-[0%] shadow-xl hover:shadow-2xl hover:shadow-black rounded-full z-1 '/>
    <img src={rytArrow} alt="" onClick={handleNextSlide} className='arrows w-12 mr-12 cursor-pointer absolute top-[50%] right-[0%] shadow-xl hover:shadow-2xl hover:shadow-black rounded-full z-1'/>
 
    </div>

  );
}

export default Merchandise;