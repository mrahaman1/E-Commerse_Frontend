import React from 'react'
import ApiFile from './Component/API/ApiFile'
import Home from './Component/Page/Home'
import Laptop from './Component/Page/Laptop'
import Ipad from './Component/Page/Ipad'
import Macbook from './Component/Page/Macbook'
import Mobile from './Component/Page/Mobile'
import Accessories from './Component/Page/Accessories'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Slider from './Component/Page/Slider'
import Nav from './Component/Comp/Nav'
import Header from './Component/Comp/Header'

const App = () => {
  return (
  <>
    <div className='big_container'>
      <Router>
          <ApiFile>
            <Header/>
            <Nav/>
            <Routes>
              <Route path='/' element ={<Home/>}/>
              <Route path='/ipad' element ={<Ipad/>}/>
              <Route path='/macbook' element ={<Macbook/>}/>
              <Route path='/laptop' element ={<Laptop/>}/>
              <Route path='/mobile' element ={<Mobile/>}/>
              <Route path='/accessories' element ={<Accessories/>}/>
            </Routes>
          </ApiFile>
      </Router>

      <Slider/>

    </div>
  
  </>

  )
}

export default App