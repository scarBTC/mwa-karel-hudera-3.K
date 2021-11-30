import cryptocurrencies from './cryptocurrencies.png';
function Product() {
    return (
    <div >
        <img className="w-20 m-auto" src={cryptocurrencies} alt="cryptocurrencies" />
        <h1 className="w-2/3 m-auto pt-3 text-3xl">
          Lorem ipsum
        </h1>
     <p className="text-left w-2/3 pt-6 m-auto text-2xl">
      Vestibulum ultricies egestas lorem, et congue tortor elementum quis. Phasellus ultricies gravida sollicitudin.
     </p>
    </div>
    );
  }
  
  export default Product;