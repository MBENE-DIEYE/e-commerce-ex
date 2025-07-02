const ApiConfig =  {
    API_URL:"https://dummyjson.com/products"
}

export default ApiConfig 

// import { useState } from "react"
// import Cards from "./assets/Cards"


// const Carello =( ) =>{
//     const[card, setCard] =useState()
// //   const total=  card.reduce((sum,item) =>(sum+ item.price * item.quantity),0)
// const addToCard = (product) =>{
//  setCard(arrayCard =>{
//     const neWcard = [];
//     let productFound =false
//     arrayCard.find((item) =>
//        {
//          (item.id === product.id)? (  neWcard.push({...item, quantity: item.quantity +1})&& ( productFound=true) )
      
//           :(neWcard.push(item))     
//          }
        
//     )
//      if(!productFound){
//         neWcard.push({...product, quantity:1})
//      }
       
//  })
// }
// const handalRemoveCard =(product) =>{
//     setCard(arrayCard => arrayCard.filter(item =>item.id !=product))
// }

//     return(
 
        
//         <div className="p-40  border rounded bg-blue-100 w-40 ml-[1000px] mt-40">
//             <h2 className="-mt-40 p-2 -ml-10 text-xl">Carrello</h2>
            
//              <ul className="mb-6">{
//               card && Array.isArray(card) && card.map(item =>{
//                     <li key={item.id} className="flex py-4">
//                         <div className="flex flex-1 flex-col">
//                             <div className="flex justify-between text-base font-medium text gray-800">
//                                 <p className="text-sm ">{item.title}</p>
//                                 <div className="flex">
//                                     <button onClick={() =>handalRemoveCard(item.id)}  className="font-medium text-indigo-400">Rimuovi</button>
//                                 </div>
//                             </div>
//                             <div className="flex flex-1 justify-between text-gray-500">
//                                 <p>Qty:{item.quantity}</p>
//                                 <span>${(item.price * item.quantity).toFixed(2)}</span>
//                             </div>
//                         </div>
//                     </li>
//                 })
//                 }

//              </ul>
                 
                 
                   
                
            
//         </div>
       
//     )
// }
// export default Carello