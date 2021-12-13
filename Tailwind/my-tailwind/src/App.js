import logo from './logo.svg';
import './App.css';
import Header from './comp/Header.js';
import mimg from './comp/mimg.png';
import Product from './comp/Product.js';
import bitcoinMining from './comp/bitcoinMining.png';
import Product2 from './comp/Product2.js';
import { useEffect, useState } from "react";

function App() {

    
  const [isToggle, setIsToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
      console.log("Začátek fetch data");
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET",
      });
      console.log("Po zavolání na API");
      const data = await res.json();
      console.log(data);
      setData(data);
      setLoading(false);
    };
    console.log("Start use effect");

    console.log("Před zavoláním fetchData");
    fetchData();
    console.log("Po zavolání fetchData");
  }, []);


  return (
    <div className="w-3/4 my-0 mx-auto">
      <Header />
      <h1 className="text-center pt-28 text-6xl">Bitcoin</h1>
      <p className="text-center m-auto pt-12 w-2/3 text-4xl">Nteger vel neque dui. Proin vel malesuada turpis. Nulla libero arcu, dapibus pellentesque turpis eget, pulvinar hendrerit urna. Phasellus ut lectus ut augue egestas consequat quis pretium nulla.</p>
      <div className="pt-12">
        <div className="w-max m-auto pt-12">
        <img src={mimg} alt="safe"/>        
        </div>
      </div>
        <h3 className="text-center text-xl pt-28">
        Quisque eget eleifend turpis,
        </h3>
        <h2 className="text-center text-3xl">
          Lorem ipsum dolor sit amet
        </h2>
      <div className="flex justify-between pt-24 m-auto">
        <Product />
        <Product />
        <Product />
        <Product /> 
      </div>
      <div className="flex pt-20">
       <img className="w1/2 m-5" src={bitcoinMining} alt="mining"/> 
       <div className="pt-16 pl-8 m-auto">
       <h2 className="text-center text-3xl pb-8">Lorem ipsum </h2>
        <Product2 /> 
        <Product2 /> 
       </div>
      </div>
      <h3 className="m-auto text-center text-xl pt-28">
        Quisque eget eleifend turpis,
        </h3>
        <h2 className="m-auto text-center text-3xl">
          Lorem ipsum dolor sit amet
        </h2>
      <div className="flex pt-20 pb-16">
      <div className="w-1/2">
       <Product2 /> 
       <Product2 />
      </div>
      <div className="w-1/2">
       <Product2 /> 
       <Product2 />
      </div>
      </div>


    </div>
  );
}

export default App;
