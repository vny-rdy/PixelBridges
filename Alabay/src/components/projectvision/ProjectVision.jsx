/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';
import video1 from '../../assets/v1.mp4';
import video2 from '../../assets/v2.mp4';
import './projectVision.css'
import rightarrow from '../../assets/RightArrow.png'
import leftarrow from '../../assets/leftArrow.png'
// Mock data
const photos = [
  { id: 1, content: "Photo 1", imgPath: img1 },
  { id: 2, content: "Photo 2", imgPath: img2 },
  { id: 3, content: "Photo 3", imgPath: img3 },
  { id: 4, content: "Photo 4", imgPath: img4 },
  { id: 5, content: "Photo 5", imgPath: img5 },
  { id: 6, content: "Photo 6", imgPath: img6 },
  { id: 7, content: "Photo 7", imgPath: img7 }
];
const videos = [
  { id: 1, content: "Video 1", videoPath: video1 },
  { id: 2, content: "Video 2", videoPath: video2 }
];

const ProjectVision = () => {
  const [activeTab, setActiveTab] = useState("all");
  const sliderRef = useRef(null); 
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:2000
  };

  const renderSlides = () => {
    const photosToRender = photos.map((item) => (
      <div key={item.id} className="slide-group ">
        <div className="flex justify-around m-auto items-center ">
          <div className="slide-item  bg-stone-400 h-[22vh] overflow-hidden rounded-3xl hover:border-[2px] hover:border-black">
            <img src={item.imgPath} alt={item.content}  className="image items-center flex w-3/5 m-auto object-cover "/>
          </div>
        </div>
      </div>
    ));

    const videosToRender = videos.map((item) => (
      <div key={item.id} className="slide-group">
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div className="slide-item">
            <video autoPlay muted loop src={item.videoPath} alt={item.content} width="300px" height="200px" controls className=" items-center flex rounded-3xl hover:border-[2px] hover:border-black" />
          </div>
        </div>
      </div>
    ));

    return activeTab === "photos"
      ? photosToRender
      : activeTab === "videos"
        ? videosToRender
        : [...photosToRender, ...videosToRender];
  };

  // Functions to navigate slides programmatically
  const previousSlide = () => sliderRef.current.slickPrev();
  const nextSlide = () => sliderRef.current.slickNext();
 const tabButtonStyle = (tabName) =>({

  color: activeTab === tabName ? '#FF5733' : 'rgb(30 41 59)'
 });
  return (
    <div className='pv bg-white h-[80vh]'>
      <div className="tab-buttons" style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
      <button onClick={() => setActiveTab("all")} className="font-monst font-bold text-2xl text-slate-800 p-[10px]" style={tabButtonStyle("all")} >
          All
        </button>
        <button onClick={() => setActiveTab("photos")} className="font-monst font-bold text-2xl text-slate-800 p-[10px]" style={tabButtonStyle("photos")} >
          Photos
        </button>
        <button onClick={() => setActiveTab("videos")} className="font-monst font-bold text-2xl text-slate-800 p-[10px]" style={tabButtonStyle("videos")} >
          Videos
        </button>
       
      </div>

      {/* Slider with custom controls */}
      <div className="relative flex items-center">
        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className="w-9/12 m-auto mt-9 items-center flex justify-center">
          {renderSlides()}
        </Slider>

        {/* Custom Previous and Next Buttons */}
        
        <img
          onClick={previousSlide}
          className="arow absolute top-[50%] left-10 translate-y-[-50%] cursor-pointer w-[5%]"
           src={leftarrow}/>
          
        <img
          src={rightarrow}
          onClick={nextSlide}
          className="arow absolute top-[50%] right-10 translate-y-[-50%] cursor-pointer w-[5%]"
         />
          
      </div>
      <h1 className="font-spicy font-semi-bold text-7xl text-yellow-400 text-center mt-20 mb-0">PROJECT VISION</h1>
    </div>
  );
};


export default ProjectVision;