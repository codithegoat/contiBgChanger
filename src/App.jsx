import { useState } from 'react'
import './App.css'
 
function App(){

//Random Color Generator
const colorChanger = function (){
    const hex = '0123456789ABCDEF'
    let color = '#'
        for (let i = 0; i < 6; i++){ 
          color += hex[Math.floor(Math.random()*16)]  
        }
    return color;
}
//Start-Btn Function
let intervalID
const startbtn = function(){
  intervalID = setInterval(myColor, 2000);
  function myColor(){
    document.body.style.backgroundColor = colorChanger()
  }
  console.log('Started');
}
//Stop-Btn Function
const stopbtn = function(){
  clearInterval(intervalID, 2000);
  console.log('Stopped');
} 

return (
    <div>
    <button
      onClick={startbtn}
      type="button"
      className="ease-out transform hover:scale-110 transition duration-500 rounded-full bg-yellow-500 mr-3 px-3 py-2 text-sm font-semibold text-grey-700 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
      Start
    </button>
    <button
      onClick={stopbtn}
      type="button"
      className="ease-out transform hover:scale-110 transition duration-500 rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
      Stop
    </button>
    </div>
  )
}
export default App
