import Button from "./button"
import { useState } from "react"

function App() {

  //usestate variables
  const [step,setStep] = useState(1);
  const [counter,setCounter] = useState(0);
  
  const date = new Date ("18 April 2025");
  date.setDate(date.getDate() + counter)

  //function for incrementaton
  function counterNext(){
    setCounter((c)=>c+step);
  }
  function counterPrevious(){
      setCounter((c)=>Math.max(0, c - step));
  }
  function handleReset(){
    setCounter(0);
    setStep(1);
  }


  return (
    <div className="h-screen flex flex-col items-center gap-4 p-4">
      <div className="flex justify-center items-center gap-2 text-[2rem] w-[25%] h-[15%] text-center">
        
        <input type="range" 
        min="0" 
        max="10" 
        value={step} 
        onChange={e=>setStep(Number(e.target.value))}
        />
        <p>Step : {step}  </p>
      </div>

      <div className="flex justify-center items-center gap-2 text-[2rem] w-[25%] h-[15%] p-2 text-center">
        <Button label="-" click={counterPrevious}/>
        <input type="text" 
               value={counter} 
               onChange={e=>setCounter(Number(e.target.value))}
               className="border-s-4 rounded-[1rem] h-[4rem] bg-gray-400 text-center focus:outline-none" 
        />
        <Button label="+" click={counterNext}/>
       
      </div>
        <p className="text-[2rem]"> 
          <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${counter} days ago was `}
          </span>
          <span>{date.toDateString()}</span> 
        </p>
        
        {(counter !==0 || step!==1) ? <div>
          <Button label="Reset" onClick={handleReset}/>
        </div> : null}

      </div>
  )
}

export default App
