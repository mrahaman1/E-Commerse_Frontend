import React, { useContext } from 'react'
import { store } from '../API/ApiFile'

const Accessories = () => {

  const [context]=useContext(store)
 
  return (
   <>   <h2>Accessories</h2>
       {
        context.filter((Data)=>Data.catagory==="Accessories")
           .map((item)=>{
               return(
                   console.log(item)
               )
           })
       }
   </>
    )
}

export default Accessories