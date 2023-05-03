import React, { useContext } from 'react'
import {store} from '../API/ApiFile'

function Macbook() {

    const [context]=useContext(store)
 
    return (
     <>   <h2>MacBook</h2>
         {
          context.filter((Data)=>Data.catagory==="macbook")
             .map((item)=>{
                 return(
                     console.log(item)
                 )
             })
         }
     </>
      )
}

export default Macbook