import React, { useEffect, useState } from 'react'
import '../../App.css'
import Img1 from '../Image/Img1.png'
import Img2 from '../Image/Img2.jpg'
import Img3 from '../Image/Img3.jpg'
import Img4 from '../Image/Img4.jpg'
import Img5 from '../Image/Img5.png'

const Slider = () => {

    const [img, setImag]= useState(0)
    const [allImg] = useState([Img1, Img2, Img3, Img4, Img5])

    useEffect(()=>{
        setInterval(()=>{
            setImag(img => img < 5 ? img + 1 : 0)
        },3000)
    })
  return (
    <div>
        <img className='imageSlider' src={allImg[img]} alt='Not Found'/>
    </div>
  )
}

export default Slider