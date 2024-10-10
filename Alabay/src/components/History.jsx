/* eslint-disable no-unused-vars */
import Rxeact from 'react'
import '../index.css'
import history from "../assets/history2.png"
import './history.css'
const History = () => {
  return (
    <div className='mainContainer bg-transparent  bg-yellow-400 rounded-3xl m-auto'>
        <div className='rounded-full h-4 bg-yellow-400 w-[13vh] m-auto'></div>
        <div className='rounded-full h-4 bg-yellow-100 w-[20vh] m-auto'></div>

        <div className='container1 h-[50vh]  grid grid-cols-2'>
            
        <img className=' mt-20 hover:rotate-3 transition-transform ease-in-out' src={history} alt="history of alabay" />
        <div className='content text-right pr-10 pt-5'>
            <h1 className='font-monst font-bold text-5xl text-orange-500 my-8'>History Of</h1>
            <h1 className='font-spicy font-semi-bold text-9xl text-white my-5'>ALABAY</h1>
            <p className='font-monst font-bold text-2xl text-slate-800 my-5'>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
        </div>
        </div>
        <div className='bg-diagonal-split h-[46vh]'></div>
        </div>
  )
}

export default History