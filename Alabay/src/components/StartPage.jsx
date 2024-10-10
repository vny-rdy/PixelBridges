
import slide from "../../../ExtraAssets/slide1.png"
import './startpage.css'
import History from './History.jsx'
import ProjectVision from './projectvision/ProjectVision.jsx'
import ProjectVision2 from './projectvision2/ProjectVision2.jsx'
import Roadmap from './roadmap/Roadmap.jsx'
import Merchandise from './merchandise/Merchandise.jsx'
import Game from './games/Game.jsx'
import GamePreview from "./gamePreview/GamePreview.jsx"


const StartPage = () => {
  return (
    <div className='app relative h-[200vh]'>
        <div className='background'>
        <img className='fixed top-0 left-0 w-[100%] h-[100%] bg-fixed bg-center bg-cover z-[-1]' src={slide} alt="main page" />
        </div>
        <div className='minor relative top-[90vh] h-full m-auto w-[94%] bg-yellow-400 rounded-3xl'>
        <History/>
        <ProjectVision/>
        <ProjectVision2/>
        <Roadmap/>
        <Merchandise/>
        <Game/>
        <GamePreview/>


        

        </div>
        
    </div>
  )
}

export default StartPage