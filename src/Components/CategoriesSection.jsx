import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function CategoriesSection() {

    const [categories,setCategories] = useState([])

    useEffect(()=>{
     axios.get ('https://dummyjson.com/products/categories').then(json => setCategories(json.data))
 
    },[])

  return (
    <div className="category" style={{marginBottom : "50px"}}>
    <div className="my-5 text-center" >
    <h1 style={{marginTop : "50px"}}> Categories </h1>
    <p className='cat'>Welcome to our store this is the place where you can buy best product in best prices..... </p>
   </div>

 <div className="row ">
  {
   categories.map((val,key) =>
      <div className="category col-md-4 my-3" key={key} style={{width: "30%", marginLeft : "30px", boxShadow : "0 6px 20px 0 rgba(0, 0, 0, 0.82)"}}>
    <Link className='category' to={`/products/category/${val}`} style={{textDecoration:"none" }}>
     <Card style={{ border : "none"}}>
      <Card.Body>
       <Card.Title >{val.replace('-',' ')}</Card.Title>
   </Card.Body>
 </Card>
</Link>
</div>
)
  }

 </div>

</div>
  )
}
