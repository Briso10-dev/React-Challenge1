

export default function Button({ label,click}){
    return (
        <button 
        className="hover:font-bold text-[2rem] text-center text-black border-[0.1rem] border-black w-16 h-18 rounded-[0.8rem] bg-gray-400"
        onClick={click}
        >
         {label}
         
        </button>
      );
}