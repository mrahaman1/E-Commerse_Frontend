import React, { useContext } from 'react'
import {store} from '../API/ApiFile'


const Home = () => {

    const [context]=useContext(store)
  return (
    <>  <h1>Home</h1>
        {
            context.map((Data)=>{
                return (
                    console.log(Data)
                )
            })
        }
    </>
  )
}

export default Home