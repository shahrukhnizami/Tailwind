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
    <button className='mr-5 p-3 bg-gray-100 border border-gray-200 rounded' onClick={plus1}>1</button>
    <button className='mr-5 p-3 bg-gray-100 border border-gray-200 rounded' onClick={plus2}> 2</button>
    <button className='mr-5 p-3 bg-gray-100 border border-gray-200 rounded' onClick={plus3}> 3</button>
    <br/>
    <button className='mr-5 p-3 bg-gray-100 border border-gray-200 rounded mt-3' onClick={plus4}> 4</button>
    <button className='mr-5 p-3 bg-gray-100 border border-gray-200 rounded mt-3' onClick={plus5}> 5</button>
    <button className='mr-5 p-3 bg-gray-100 border border-gray-200 rounded mt-3' onClick={plus6}> 6</button>
    <br/>
    <button className='mr-5 p-3 bg-gray-100 border border-gray-200 rounded mt-3' onClick={plus7}> 7</button>
    <button className='mr-5 p-3 bg-gray-100 border border-gray-200 rounded mt-3' onClick={plus8}> 8</button>
    <button className='mr-5 p-3 bg-gray-100 border border-gray-200 rounded mt-3' onClick={plus9}> 9</button>
    
    {/* <Button onClick={plus3}  text="help"></Button> */}
   {/* <Button onClick={plus3} text={"three"} ></Button> */}
   </ThemeText>
    </div>
     
    
  )
}
