import logo from './logo.svg';
import './App.css';
import Header from './comp/Header.js';
import mimg from './comp/mimg.png';
import Product from './comp/Product.js';
import bitcoinMining from './comp/bitcoinMining.png';
import Product2 from './comp/Product2.js';

function App() {
  return (
    <div className="w-3/4 my-0 mx-auto">
      <Header />
      <h1 className="text-center pt-10 text-xl">XXXXXXX XXXXXXXXX</h1>
      <p className="text-center m-auto pt-5 w-60 text-2xl">xxxxx xxxx x x x x xxxxx x x xx  xxxx xxxxxxx xxx xx xxx x xxxxxxxx xxxxxx xxxx  xxx xxx</p>
      <div className="w-max mx-auto pt-10">
       <img src={mimg} alt="safe"/>        
      </div>
      <div className="flex justify-between pt-16 m-auto">
        <Product />
        <Product />
        <Product />
        <Product /> 
      </div>
      <div className="flex pt-16">
       <img className="w1/2 m-5" src={bitcoinMining} alt="mining"/> 
       <div className="pt-16 pl-8 m-auto">
        <Product2 /> 
        <Product2 /> 
       </div>
      </div>
      <div className="flex pt-16 pb-16">
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
