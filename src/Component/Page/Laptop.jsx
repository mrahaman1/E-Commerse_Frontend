import React, { useContext } from 'react'
import {store} from '../API/ApiFile'

const Laptop = () => {

  const [context]=useContext(store)
return (
 <>   <h2>Laptop</h2>
     {
      context.filter((Data)=>Data.catagory==="laptop")
         .map((item)=>{
             return(
                 console.log(item)
             )
         })
     }
 </>
  )
}

export default Laptop