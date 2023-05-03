import React, { useContext } from 'react'
import {store} from '../API/ApiFile'

function Mobile() {

  const [context]=useContext(store)
 
  return (
   <>   <h2>Mobile</h2>
       {
        context.filter((Data)=>Data.catagory==="Mobile")
           .map((item)=>{
               return(
                   console.log(item)
               )
           })
       }
   </>
    )
}

export default Mobile