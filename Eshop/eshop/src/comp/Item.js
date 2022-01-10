import Bud from './bud.png';
import { useEffect, useState } from "react";

function Item() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("user click");
    setCount(count + 1);
  }
  const handleClick2 = () => {
    console.log("user click");
    setCount(count - 1);
  }
    return (
      <div className="w-1/4 m-2 rounded-lg bg-white mt-12 border-white border-2 border-solid hover:border-gray-700 hover:border-2 hover:border-solid">
        <div className="h-56">
          <h3 className="mt-2 ml-4 text-xl">Good bud</h3>
          <img src={Bud} alt="Bud" className="mt-6 h-40 mx-auto"/>
        </div> 
         <div className="bg-gray-500 rounded-b-lg h-14 mt-2 flex items-center">
          <div className="flex ml-2 mr-2">
            <button onClick={handleClick} className="bg-white rounded-l-lg text-xl  h-8 w-8">+</button>
            <button className="bg-white text-xl  h-8 w-8 ">{count}</button>
            <button onClick={handleClick2} className="bg-white rounded-r-lg text-xl h-8 w-8">-</button>
          </div>
            <button className="bg-white rounded-lg text-xl h-8 w-12 ml-24">Add</button>
         </div>
      </div>
    );
  }
  
export default Item;