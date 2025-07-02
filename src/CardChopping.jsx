const CardChopping = ({products,handleCardRemove,onQuantity}) =>{
    return(
        <div className="bg-blue-500  p-40 w-40 mt-40 ml-[1000px]">
             <div className="">
            <h2 className="-mt-40 p-2 -ml-6 text-xl">Carrello</h2>
        </div>
        <div className="card-product">
          
            { 
            // products.length === 0 &&  *
            // (<span className="empty">Carrello Vuoto</span>)
            }
            {
     products && Array.isArray(products) &&  products.map(product =>(
                <div className="card-product" key={product.id}>
                    <img className="-pt-6 w-20 ml-10" src={product.thumbnail} alt="" />
                    <div className="title">
                        <h2>{product.title}</h2>
                        <span>{product.price}</span>
                    </div>
                   <div className="btn-remove" onClick={()=>{handleCardRemove(product)}}> remouve</div>
                </div>
            ))}
        </div> 
        </div>
    )
}
export default CardChopping