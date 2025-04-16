

export default function Button({ label }){
    return (
        <button className="hover:font-bold text-[2rem] text-center text-black border-[0.1rem] border-black w-18 h-18 rounded-[0.8rem] bg-gray-400">
         {label}
        </button>
      );
}