import axios from "axios"
import { useEffect, useState } from "react"
import ApiConfig from "../config/Api"

const Cards = () => {

    const [card, setCard] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const fetchData = async () =>{
        if(error) setError(false)
        if(!loading) setLoading(true)   
        try {
            const response = await axios({
                  url:ApiConfig.API_URL,
                 method: "get"
            }
            

            );
            
             setCard(response.card)
             console.log(response.card)
        } 
           
        catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        fetchData
    },[])

    return (
        <>
            <div className='flex-row  flex  w-1240 gap-2 '>
                <div className="flex flex-wrap p-4 boder-black bg-red-300 gap-4 ">
                   {card && Array.isArray(card) && card.map((item) =>{
                     <div className="p-8 border rounded 1px w-1/4 bg-yellow-300 " >
                        <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="">{item.thumbnail}</img>
                        <div>
                            <h1 className="mb-4 mt-9 text-2xl font-medium">{item.title}</h1>
                        </div>
                        <div className="flex">
                            <div className="mt-3  text-4xl font-medium"> {item.pring}</div>
                            <div>{item.qtn}</div>
                            <div className="flex bg-blue-700 px-4 py-2 ml-9 mt-4 text-white  text-center rounded">
                                <div> <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg></div>
                                <button >Add to cart</button>
                            </div>
                        </div>
                    </div>
                   })}
{/* 
                      <div className="p-8 border rounded 1px w-1/4 bg-yellow-300" >
                        <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt=""></img>
                        <div>
                            <h1 className="mb-4 mt-9 text-2xl font-medium">Apple iMac 27",1TB HDD, Retina 5K Display, M3 Max</h1>
                        </div>
                        <div className="flex">
                            <div className="mt-3  text-4xl font-medium"> $1,699</div>
                            <div className="flex bg-blue-700 px-4 py-2 ml-9 mt-4 text-white  text-center rounded">
                                <div> <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg></div>
                                <button >Add to cart</button>
                            </div>
                        </div>
                    </div>

                      <div className="p-8 border rounded 1px w-1/4 bg-yellow-300 " >
                        <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt=""></img>
                        <div>
                            <h1 className="mb-4 mt-9 text-2xl font-medium">Apple iMac 27",1TB HDD, Retina 5K Display, M3 Max</h1>
                        </div>
                        <div className="flex">
                            <div className="mt-3  text-4xl font-medium"> $1,699</div>
                            <div className="flex bg-blue-700 px-4 py-2 ml-9 mt-4 text-white  text-center rounded">
                                <div> <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg></div>
                                <button >Add to cart</button>
                            </div>
                        </div>
                    </div>

                      <div className="p-8 border rounded 1px w-1/4 bg-yellow-300 " >
                        <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt=""></img>
                        <div>
                            <h1 className="mb-4 mt-9 text-2xl font-medium">Apple iMac 27",1TB HDD, Retina 5K Display, M3 Max</h1>
                        </div>
                        <div className="flex">
                            <div className="mt-3  text-4xl font-medium"> $1,699</div>
                            <div className="flex bg-blue-700 px-4 py-2 ml-9 mt-4 text-white  text-center rounded">
                                <div> <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg></div>
                                <button >Add to cart</button>
                            </div>
                        </div>
                    </div>

                      <div className="p-8 border rounded 1px w-1/4 bg-yellow-300 " >
                        <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt=""></img>
                        <div>
                            <h1 className="mb-4 mt-9 text-2xl font-medium">Apple iMac 27",1TB HDD, Retina 5K Display, M3 Max</h1>
                        </div>
                        <div className="flex">
                            <div className="mt-3  text-4xl font-medium"> $1,699</div>
                            <div className="flex bg-blue-700 px-4 py-2 ml-9 mt-4 text-white  text-center rounded">
                                <div> <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg></div>
                                <button >Add to cart</button>
                            </div>
                        </div>
                    </div>

                      <div className="p-8 border rounded 1px w-1/4 bg-yellow-300 " >
                        <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt=""></img>
                        <div>
                            <h1 className="mb-4 mt-9 text-2xl font-medium">Apple iMac 27",1TB HDD, Retina 5K Display, M3 Max</h1>
                        </div>
                        <div className="flex">
                            <div className="mt-3  text-4xl font-medium"> $1,699</div>
                            <div className="flex bg-blue-700 px-4 py-2 ml-9 mt-4 text-white  text-center rounded">
                                <div> <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg></div>
                                <button >Add to cart</button>
                            </div>
                        </div>
                    </div>

                      <div className="p-8 border rounded 1px w-1/4 bg-yellow-300 " >
                        <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt=""></img>
                        <div>
                            <h1 className="mb-4 mt-9 text-2xl font-medium">Apple iMac 27",1TB HDD, Retina 5K Display, M3 Max</h1>
                        </div>
                        <div className="flex">
                            <div className="mt-3  text-4xl font-medium"> $1,699</div>
                            <div className="flex bg-blue-700 px-4 py-2 ml-9 mt-4 text-white  text-center rounded">
                                <div> <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg></div>
                                <button >Add to cart</button>
                            </div>
                        </div>
                    </div>

                      <div className="p-8 border rounded 1px w-1/4 bg-yellow-300 " >
                        <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt=""></img>
                        <div>
                            <h1 className="mb-4 mt-9 text-2xl font-medium">Apple iMac 27",1TB HDD, Retina 5K Display, M3 Max</h1>
                        </div>
                        <div className="flex">
                            <div className="mt-3  text-4xl font-medium"> $1,699</div>
                            <div className="flex bg-blue-700 px-4 py-2 ml-9 mt-4 text-white  text-center rounded">
                                <div> <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg></div>
                                <button >Add to cart</button>
                            </div>
                        </div>
                    </div> */}

                      {/* <div className="p-8 border rounded 1px w-1/4 bg-yellow-300 " >
                        <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt=""></img>
                        <div>
                            <h1 className="mb-4 mt-9 text-2xl font-medium">Apple iMac 27",1TB HDD, Retina 5K Display, M3 Max</h1>
                        </div>
                        <div className="flex">
                            <div className="mt-3  text-4xl font-medium"> $1,699</div>
                            <div className="flex bg-blue-700 px-4 py-2 ml-9 mt-4 text-white  text-center rounded">
                                <div> <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg></div>
                                <button >Add to cart</button>
                            </div>
                        </div>
                    </div>

                      <div className="p-8 border rounded 1px w-1/4 bg-yellow-300 " >
                        <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt=""></img>
                        <div>
                            <h1 className="mb-4 mt-9 text-2xl font-medium">Apple iMac 27",1TB HDD, Retina 5K Display, M3 Max</h1>
                        </div>
                        <div className="flex">
                            <div className="mt-3  text-4xl font-medium"> $1,699</div>
                            <div className="flex bg-blue-700 px-4 py-2 ml-9 mt-4 text-white  text-center rounded">
                                <div> <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg></div>
                                <button >Add to cart</button>
                            </div>
                        </div>
                    </div>

                      <div className="p-8 border rounded 1px w-1/4 bg-yellow-300 " >
                        <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt=""></img>
                        <div>
                            <h1 className="mb-4 mt-9 text-2xl font-medium">Apple iMac 27",1TB HDD, Retina 5K Display, M3 Max</h1>
                        </div>
                        <div className="flex">
                            <div className="mt-3  text-4xl font-medium"> $1,699</div>
                            <div className="flex bg-blue-700 px-4 py-2 ml-9 mt-4 text-white  text-center rounded">
                                <div> <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg></div>
                                <button >Add to cart</button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="w-1/4 bg-red-600">
                    {/* <div className="bg-blue-400">cards</div> */}
                </div>
            </div>
        </>
    )
}

export default Cards