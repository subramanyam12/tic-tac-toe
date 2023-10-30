import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Entry = ({bool,setbool,outbool,tie}) =>{
    const [entrybool, setentrybool] = useState(true)
    const [outtbool, setouttbool] = useState(false)

  useEffect(()=>{
     setouttbool(outbool)
     setentrybool(true)
    },[tie,outbool])

    const round=()=>{
       setbool(false)
       setentrybool(false)
    }
    const cross=()=>{
       setbool(true)
       setentrybool(false)
    }

    const load=()=>{
        setouttbool(true)
        setTimeout(()=>window.location.reload(),100)
    }
    

  return (
     <>
    {entrybool && (
        <div className='top-0 w-full z-10 h-full entry absolute'>
         <div className='w-[30vmax] p-2 h-[30vmin] text-white flex flex-col gap-5 items-center justify-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute bg-[#00000069]'>
          {outtbool ? (
            <>
            <h1 className='text-2xl font-bold'>Please Select one .</h1>
            <div className='flex items-center gap-10'>
                <button onClick={round} className='w-[10vmax] flex items-center justify-center font-bold text-3xl p-1 bg-[rgb(103,245,90)]'>O</button>
                <button onClick={cross} className='w-[10vmax] flex items-center justify-center font-bold text-3xl p-1  bg-[rgb(18,190,233)]'>X</button>
            </div>
            </>
           ):(
             <div className='flex flex-col gap-3 items-center '>
               <p className='text-2xl text-center font-bold'>{tie ? <span>Congratulations {bool ?<span className='rounded-lg bg-gray-600 text-[rgb(18,190,233)] border-[1px] border-white px-2'>X</span>:<span className=' text-[rgb(103,245,90)] rounded-lg bg-gray-600 border-[1px] border-white px-2'>O</span> } won the Game</span>:<span>Game is Tie</span>}</p>
                 <button onClick={load} className='font-bold text-xl w-[25vmin] p-1 bg-blue-700'>Reset</button>
             </div>
             )}
         </div>
       </div>
     )}
     </>
  )
}

export default Entry