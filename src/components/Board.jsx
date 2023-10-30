import React, { useEffect, useState } from 'react'

const list=[0,1,2,3,4,5,6,7,8]
const cross=[0,0,0,0,0,0,0,0,0]
const round=[0,0,0,0,0,0,0,0,0]
const store=[]

const Board = ({bool,setbool,setoutbool,settie}) => {

  const [ross, setross] = useState(null)
  const [index, setindex] = useState(null)
  
  useEffect(()=>{
    setross(bool)
  },[bool])

  const check=(list)=>{
    let flag=false
     let wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
     wins.forEach(win=>{
      if(list[win[0]]+list[win[1]]+list[win[2]]===3){
        setoutbool(false)
        setbool(ross)
        flag=true
       }
      })
      if(flag)return
        
      if(store.length===9){
       settie(false)
       setoutbool(false)
      }
  }

  const clickres=(i,check)=>{
    setindex(i)
    store.push(i)
    if(ross){
      if(!round[i]){
        cross[i]=1
        setross(false)
      }
      setTimeout(() =>check(cross),200)
    }else{
      if(!cross[i]){
        round[i]=1
        setross(true)
      }
      setTimeout(() =>check(round),200)
    }
  }
 
  

  return (
    <div className='grid p-3 gap-2 place-items-center grid-cols-3 box rounded-3xl  bg-gray-500 '>
      {list.map(i=>(
      <div key={i} onClick={()=>clickres(i,check)} className='w-[85px] cursor-pointer shadow shadow-gray-900 relative rounded-xl h-[85px] text-center bg-gray-700'>
        <div className={`w-full ${(index===i || store.includes(i)) && (round[i] ? 'round pointer-events-none':'cross pointer-events-none')} rotatey h-full rounded-xl`}></div>
      </div>
      ))}
    </div>
  )
}

export default Board