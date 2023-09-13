import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Entry from './components/Entry'

function App() {
  
const [bool, setbool] = useState(null)
const [outbool, setoutbool] = useState(true)
const [tie, settie] = useState(true)
 
  return (
    <>
      <Entry setbool={setbool} outbool={outbool} tie={tie} />
    <div className='flex flex-col gap-7 items-center justify-center h-[100vh]'> 
      <Board bool={bool} setoutbool={setoutbool} settie={settie} />
    </div>
    </>
  )
}

export default App
