import './App.css';
import Header from './comp/Header.js';
import Item from './comp/Item.js';
import Footer from './comp/Footer.js';

function App() {
  return (
    <div className="bg-slate-50">
      <Header />
      <div className="h-screen w-3/4 my-0 mx-auto">
        <div className="h-5/6">
          <div className="bg-[url('./comp/mweed3.jpg')] bg-cover bg-no-repeat h-full w-full">
            <h1 className="mx-auto text-6xl"></h1>
          </div>
        </div>
      </div>
      <div className="w-3/4 my-0 mx-auto">
        <div className="justify-between w-full flex">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <div className="justify-between w-full flex">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <div className="justify-between w-full flex">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
