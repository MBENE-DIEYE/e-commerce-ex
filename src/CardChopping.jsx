import Cards from "./assets/Cards"

const CardChopping = ({products,handleCardRemove,total}) =>{

   
    
   

    return(
       
       
        <div className="border rounded bg-gray-100  p-40 w-40 mt-40 ml-[1000px]">
             <div className="">
            <h2 className="-mt-40 p-2 -ml-6 text-xl">Carrello</h2>
        </div>
        <div className="card-product">
          
            { 
            // products.length < 0   ?
            // (<span className="empty">Carrello Vuoto</span>) :
            
            
     products && Array.isArray(products) &&  products.map(product =>(
                <div className="flex" key={product.id}>
                    <div className="w-10 -ml-40  p-4 ">
                        <h2 className="mb-2">{product.title}</h2>
                       <div className="flex">
                          <span className="">Qtn:{product.quantity}</span>
                        <span className=" ml-48">{product.price}$</span>
                       </div>
                    </div>
                   <div className="ml-40 cursor-default mt-4 text-violet-500 px-4 py-0  h-7" onClick={()=>{handleCardRemove(product)}}> remouve</div>
                   {/* <div className="mt-80 -ml-60 -mb-36">Total :$ {total.tofixed(2)} </div>  */}
                </div>
                
            ))}
        
        </div> 
        
        </div>
   
    )
}
export default CardChopping