import Button from "./button"
import { useState } from "react"

function App() {
  const [step,setStep] = useState(1);
  const [counter,setCounter] = useState(0);

  //function for incrementaton
  function stepNext(){
      setStep((s)=>s+1)
  }
  function counterNext(){
    setCounter((c)=>c+1)
  }
  function stepPrevious(){
    setStep((s)=>s-1)
}
  function counterPrevious(){
      setCounter((c)=>c-1)
  }

  return (
    <div className="bg-blue-400 h-screen flex flex-col items-center gap-4 p-4">
      <div className="flex justify-center items-center bg-green-400 text-[2rem] w-[25%] h-[15%] text-center">
        <Button label="-" click={stepPrevious}/>
        <p>Step : {step}  </p>
        <Button label="+" click={stepNext}/>
      </div>
      <div className="flex justify-center items-center bg-red-400 text-[2rem] w-[25%] h-[15%] p-2 text-center">
        <hr />
        <Button label="-" click={counterPrevious}/>
        <p>Count : {counter} </p>
        <Button label="+" click={counterNext}/>
        <hr />
      </div>
        <p className="text-[2rem]">days from today is Wed jul 2027</p>
      </div>
  )
}

export default App
