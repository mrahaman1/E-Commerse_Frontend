import React, { useContext } from 'react'
import { store } from '../API/ApiFile'

function Ipad() {
  const [context]=useContext(store)
 
  return (
   <>   <h2>Ipad</h2>
       {
        context.filter((Data)=>Data.catagory==="Ipad")
           .map((item)=>{
               return(
                   console.log(item)
               )
           })
       }
   </>
    )
}

export default Ipad