import React, { useState } from 'react'
import { useEffect } from 'react'

export default function ImageSection({images}) {
    const [img, setimg] = useState(images[0] ? images[0] : null)




    const changeImage = (index) =>{
        setimg(images[index])
    }


  return (
   <>
   <div className='container w-75 bgpics'>
    <img src={img} alt='' className='img-fluid mb-5' />


   </div >



    <div className='d-flex align-items-center gap-3 bg-light border border-dark p-2 rounded mb-5 bgpic'>
     {

       images?.map((val,key) => 
       <div className={img == images[key]?('border border-dark rounded-circle p-2') : (null)} onClick={() => changeImage(key)} key={key}><img className ='rounded-circle img-fluid' src={val} alt={`img-${key}`} />
       </div>
       ) 
     }


    </div>


   </>
  )
}