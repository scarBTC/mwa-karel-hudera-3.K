import Cannabis from './cannabis.png';
import Cart from './cart.png';

function Header() {
    return (
      <div className="h-20 flex sticky top-0 bg-white">
        <div className="w-1/3 flex h-20 items-center">
          <img src={Cannabis} alt="Canabis" className="h-14 ml-8 animate-pulse"/> 
          <h1 className="text-2xl ml-6">Dame buco</h1>   
        </div>
        <nav className="w-1/3 flex h-20 items-center" >
          <ul className="m-auto">
            <li className="list-none inline-block text-xl"><a className="block p-3" href="#">Info</a></li>
            <li className="list-none inline-block text-xl"><a className="block p-3" href="#">Obchod</a></li>
            <li className="list-none inline-block text-xl"><a className="block p-3" href="#">THC</a></li>
            <li className="list-none inline-block text-xl"><a className="block p-3" href="#">CBD</a></li>
            <li className="list-none inline-block text-xl"><a className="block p-3" href="#">Seminka</a></li>
            <li className="list-none inline-block text-xl"><a className="block p-3" href="#">Doplnky</a></li>
          </ul>
        </nav>          
        <div className="w-1/3 flex h-20 items-center">
          <div className="flex absolute right-0">
            <a href="Cart.js">
             <img src={Cart} alt="Cart" className="mr-8 h-12 w-12"/>     
            </a>      
            <button className="mr-8 h-10 w-14 text-xl rounded-md bg-white hover:border-gray-700 hover:border-2 hover:border-solid">Login</button>  
          </div>        
        </div>
      </div>
    );
  }
  
export default Header;