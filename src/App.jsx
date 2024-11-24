import CanvasDemo from "./CanvasDemo"
import { listEquation } from "./listEquation"

export default function App() {
  
  return (
    <div className='w-full h-[calc(h-full-300px)] gap-8 flex flex-col text-white items-center justify-center bg-slate-800'>
      <div className="p-4 font-bold bg-slate-300 text-center text-black w-full sticky top-0 z-20">
        <h1>Freely move around the canvas using your mouse to zoom in and out in order to get different view angles</h1>
      </div>
      {listEquation.map( (para , index) => {
        return <CanvasDemo key={index} {...para} />
      })}
      <div className="w-full text-sm h-96 bg-slate-600 flex-col flex justify-center items-center">
        <p>Arizona Western College</p>
        <label>Calculus 2  - Section 10 polar and parametric equations</label>
        <lavel className="text-gray-400">William Barajas</lavel>
      </div>
    </div>
  )
}
