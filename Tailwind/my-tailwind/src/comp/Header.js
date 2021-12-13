import bitcoin from './bitcoin.png';
function Header() {
    return (
      <div className="flex justify-between pt-6">
      <div className="flex"> 
      <img className="h-10 text-left ml-4 mr-2" src={bitcoin} alt="bitcoin"/>
      <h1 className="leading-10 w-auto text-left text-2xl">Startup landing</h1>
      </div>
        <nav className="leading-10 text-center">
            <ul >
              <li className="list-none inline-block leading-10 w-auto text-2xl  hover:text-red-500"><a className="block pr-5" href="#">Home</a></li>
              <li className="list-none inline-block leading-10 w-auto text-2xl hover:text-red-500"><a className="block pr-5" href="#">Features</a></li>
              <li className="list-none inline-block leading-10 w-auto text-2xl hover:text-red-500"><a className="block pr-5" href="#">Pricing</a></li>
              <li className="list-none inline-block leading-10 w-aut text-2xl hover:text-red-500"><a className="block pr-5" href="#">Testimonial</a></li>
            </ul>
          </nav>
          <button className="bg-yellow-400 rounded-full px-4 mr-4 duration-400 hover:bg-yellow-500"><h1 className="leading-10 w-auto text-right text-xl">Get Started</h1></button>
      </div>
    );
  }
  
  export default Header;