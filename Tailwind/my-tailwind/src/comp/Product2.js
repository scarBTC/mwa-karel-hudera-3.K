import purchase from './purchase.png';
function Product2() {
    return (
    <div className="flex m-auto">
       <img className="w-20 h-20 pt-5 m-4" src={purchase} alt="purchase" />
        <div>
            <h1 className="text-left w-2/3 pt-6 pl-3 text-3xl">
             Lorem ipsum
            </h1>
            <p className="text-left w-2/3 pt-6 pl-3 text-2xl">
               Vestibulum ultricies egestas lorem, et congue tortor elementum quis.
            </p>            
        </div>
    </div>
    );
  }
  
  export default Product2;