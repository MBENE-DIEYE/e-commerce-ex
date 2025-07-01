
import { useEffect, useState } from "react"


const Cards = () => {

    const API_URL="https://dummyjson.com/products"


    const [data, setData] = useState(null)
    const[loading, setLoading] = useState(true)
   const [error, setError] = useState(false)

    const fetchData = async () =>{
        if(!loading) setLoading()
            if(error) setError()
       
        try {
            const response = await fetch(API_URL,{method:"GET"})
           
              if( !response.ok){
             throw new Error("error")
              }

              const data = await response.json()
              setData(data.products)
            // console.log(data.products)
           
        } 
           
        catch (error) {
            console.log(error)
        }
       
    }

    useEffect(() =>{
        fetchData()
    },[])

    return (
        <>
            <div className='flex-row  text-wrap flex   m-6 gap-2 '>
                {/* <div className="text-center  font-medium ml-1/2">Products</div> */}
                <div className="flex flex-wrap ml-20 mt-20 p-20 boder-black w-[900px]  gap-4 ">
                   {data && Array.isArray(data) && data.map((product) =>(
                     <div key={product.id} className="p-2 border  rounded h-80 w-70  " >
                         <div>{product.id}</div>
                        <img className="-pt-6 w-20 ml-10 " src={product.thumbnail} alt=""/>
                       
                        <div>
                            <h1 className="mb-4 mt-2  text-center font-normal w-40">{product.title}</h1>
                        </div>
                        
                            <div className="mt-3 text-center pt-3 text-xl "> {product.price}</div>
                            {/* <div>{item.qtn}</div> */}
                            <div className="flex bg-blue-700  px-4 py-2 m-5 text-white  text-center rounded">
                                <div> <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg></div>
                                <button >Add to cart</button>
                           
                        </div>
                    </div>
                   ))}

                     
                     
                    
                </div>
                {/* <div className="bg-blue-500 w-[1240]   pr-50 -ml-80 mt-4  border rounded "> 
                </div> */}
            </div>
        </>
    )
}

export default Cards