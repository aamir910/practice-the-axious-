
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  
  const[text ,settext] = useState("")
  const[text2 ,settext2] = useState("")
  
  useEffect(
    ()=> {
       setTimeout(()=>{
        settext2(" used effect done  ")
       } ,3000)
    } ,[text2]
  );
 
    const a  = "block w-[70%] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

const b = "    w-full h-32 px-4 py-2 text-base text-gray-700 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:bg-black hover:text-white   transition-colors"
function getdata(event)
{
settext(event.target.value) ; 
}

function handletextarea() 
{
  settext2(text)
}



  return (


    <div className=' container mx-auto mt-6   '>
      <label htmlFor="first-name" className="block font-semibold leading-6 text-gray-900 text-lg">
        First name
      </label>
      <div className="mt-2.5">
        <input 
          value={text}
          onChange={getdata}
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className= {a}
         />
<button class= " mt-2.5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"    onClick={handletextarea}>
  show below 
</button>


      </div>

      <div class="w-full mt-3 ">
        <textarea className= {b}  value={text2}></textarea>
      </div>

    </div>  
  );
}

export default App;
