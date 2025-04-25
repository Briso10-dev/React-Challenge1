import Button from "./button"
import { useState } from "react"

function App() {

  //usestate variables
  const [step,setStep] = useState(1);
  const [counter,setCounter] = useState(0);
  
  const date = new Date ("18 April 2025");
  date.setDate(date.getDate() + counter)

  //function for incrementaton
  function stepNext(){
      setStep((s)=>s+1);
  }
  function stepPrevious(){
    setStep((s)=>s-1)
  }
  function counterNext(){
    setCounter((c)=>c+step);
  }
  function counterPrevious(){
      setCounter((c)=>Math.max(0, c - step));
  }

  return (
    <div className="h-screen flex flex-col items-center gap-4 p-4">
      <div className="flex justify-center items-center gap-2 text-[2rem] w-[25%] h-[15%] text-center">
        
        <input type="range" 
        min="0" 
        max="10" 
        value={step} 
        onChange={e=>setStep(e.target.value)}
        />
        <p>Step : {step}  </p>
      </div>
      <div className="flex justify-center items-center gap-2 text-[2rem] w-[25%] h-[15%] p-2 text-center">
        <hr />
        <Button label="-" click={counterPrevious}/>
        <p>Count : {counter} </p>
        <Button label="+" click={counterNext}/>
        <hr />
      </div>
        <p className="text-[2rem]"> 
          <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${counter} days ago was `}
          </span>
          <span>{date.toDateString()}</span> </p>
      </div>
  )
}

export default App
