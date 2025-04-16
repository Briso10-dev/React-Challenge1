import Button from "./button"
import { useState } from "react"

function App() {
  //An array of days :
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  //An array of week :
  const week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  //An array of months :
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const year = [2025];

  //usestate variables
  const [step,setStep] = useState(1);
  const [counter,setCounter] = useState(0);
  

   // Derived current "virtual date"
   const currentDay = days[counter % days.length];
   const currentWeekDay = week[counter % week.length];
   const currentMonth = months[Math.floor(counter / days.length) % months.length];
   const currentYear = year[0]; // you could also do logic for dynamic year growth

   const date = `Today is ${currentWeekDay} ${currentDay} ${currentMonth} ${currentYear}`;

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
      setCounter((c)=>c-step);
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
        <p className="text-[2rem]"> {date} </p>
      </div>
  )
}

export default App
