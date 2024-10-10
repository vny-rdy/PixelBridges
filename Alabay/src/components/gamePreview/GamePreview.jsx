/* eslint-disable no-unused-vars */
import gamepreview from '../../assets/gamePreviews.png'
import preview from '../../assets/preview.png'
import rightarrow from '../../assets/RightArrow.png'
import './gamepreview.css'
import socMedia from '../../assets/socialMedia.png'
const GamePreview = () => {
  return (
    <div className='h-[200vh] w-[100%] bg-white'>
        <img src={gamepreview} alt="" className='w-2/5 ml-[11%] py-40 pb-20' />
        <div className='game_previews flex items-center justify-evenly ml-16'>
        <img src={preview} alt="" className='w-3/4 ' />
        <div className=''>
        <img src={rightarrow} alt="" className='preview w-16 h-20 cursor-pointer'/>
        </div>
        </div>
        <img src={socMedia} alt="" className='w-3/4 m-auto pt-20'/>
    </div>
  )
}

export default GamePreview