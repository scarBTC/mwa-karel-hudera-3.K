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
      <h1 className="text-center pt-28 text-6xl">Bitcoin</h1>
      <p className="text-center m-auto pt-12 w-2/3 text-4xl">Nteger vel neque dui. Proin vel malesuada turpis. Nulla libero arcu, dapibus pellentesque turpis eget, pulvinar hendrerit urna. Phasellus ut lectus ut augue egestas consequat quis pretium nulla.</p>
      <div className="pt-12">
        <div className="w-max m-auto pt-12">
        <img src={mimg} alt="safe"/>        
        </div>
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
