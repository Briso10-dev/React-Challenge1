import Button from "./button"

function App() {
  return (
    <div className="bg-blue-400 h-screen flex flex-col items-center gap-4 p-4">
      <div className="flex justify-center items-center bg-green-400 text-[2rem] w-[25%] h-[15%] text-center">
        <Button label="-" />
        <p>Step : </p>
        <Button label="+" />
      </div>
      <div className="flex justify-center items-center bg-red-400 text-[2rem] w-[25%] h-[15%] p-2 text-center">
        <hr />
        <Button label="-" />
        <p>Count : </p>
        <Button label="+" />
        <hr />
      </div>
        <p className="text-[2rem]">days from today is Wed jul 2027</p>
      </div>
  )
}

export default App
