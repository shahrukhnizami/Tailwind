import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componenets/Header'

import Footer from './componenets/Footer'
import Testimonial from './componenets/Testimonial'
import Hero_section from './componenets/Hero_section'
import Button from './componenets/Button'

import ThemeText from './componenets/ThemeText'

export default function App() {
  // const user={Login:true,}

  // const heading = "Common"
  const [num , setNum]= useState(0);
  console.log(setNum);
  
  const cancel = ()=> setNum(num*0)
  const plus1 = ()=> setNum(num+1)
  const plus2 = ()=> setNum(num+2)
  const plus3 = ()=> setNum(num+3)
  const plus4 = ()=> setNum(num+4)
  const plus5 = ()=> setNum(num+5)
  const plus6 = ()=> setNum(num+6)
  const plus7 = ()=> setNum(num+7)
  const plus8 = ()=> setNum(num+8)
  const plus9 = ()=> setNum(num+9)

console.log(num);


  return (
    <div className='flex flex-wrap p-5 flex-col items-center'>
      <h1>Use State</h1>
      
    <ThemeText>
    <h2 className='center'>{num}</h2>
    <br/>
    <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={cancel}>Ce</button>
    <br/>
    
    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={plus1}>1</button>
    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={plus2}> 2</button>
    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={plus3}> 3</button>
   
    <br/>
    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={plus4}> 4</button>
    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={plus5}> 5</button>
    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={plus6}> 6</button>
    <br/>
    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={plus7}> 7</button>
    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={plus8}> 8</button>
    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={plus9}> 9</button>
    <br/>
    <br/>
    <Button onClick={'plus3'}  text={"Blue"}></Button>
    <Button onClick={'plus3'}  text="Orange" bgColor={'bg-orange-500'} hover={'hover:bg-orange-400'}></Button>
    <Button onClick={plus3}  text="Green" bgColor={'bg-green-500'} hover={'hover:bg-green-400'}></Button>
    <Button onClick={plus3}  text="Yellow" bgColor={'bg-yellow-500'} hover={'hover:bg-yellow-400'}></Button>
    <Button onClick={plus3}  text="Red" bgColor={'bg-red-500'} hover={'hover:bg-red-400'}></Button>
    
   {/* <Button onClick={plus3} text={"three"} ></Button> */}
   </ThemeText>
    </div>
     
    
  )
}
