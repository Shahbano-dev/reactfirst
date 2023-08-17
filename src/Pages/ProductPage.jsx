import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import ImageSection from '../Components/ImageSection'
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import Spinner from 'react-bootstrap/Spinner';
export default function ProductPage() {

  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [review, setReview] = useState(" ")
  const [ratingstar, setratingStar] = useState(0)
  const [productQuantity, setProductQuantity] = useState(1)

  const ratingChanged = (newRating) => {
    setratingStar(newRating)
  }

  const SubmitReview = () => {
    const payload = {
      productID: productID,
      review: review,
      rating: ratingstar,

    }
    console.log(payload)

    Swal.fire({
      title: 'Successfully Submited!',
      text: 'Thanks for Reviewing Our Product',
      icon: 'success',
      confirmButtonText: 'Thanks for Rating Us',
    })

  }
  const AddtoCart = () => {

    const payload = {
      ...product,
      productQuantity,
      totalprice: product.price * productQuantity

    }
    console.log(payload)

    Swal.fire({
      title: 'Added to Cart!',
      text: 'Check your Cart for Check Out',
      icon: 'success',
      confirmButtonText: 'Continue Shopping',
    })
  }

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productID}`)
      .then((json) => setProduct(json.data));
  }, []);

  return (
   <>
   <NavigationBar/>
      <div className="text-center my-5 cat">
        <h1 > {product.title} - {product.price}$</h1>
        <p className=" cat"> {product.description}</p>
        <div className='d-flex justify-content-center'>
          <ReactStars className='star'
            count={5}
            size={24}
            edit={false}
            value={product.rating}
            color2={'#ffd700'}
          />

        </div>
        <div className='my-3'>
          <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setProductQuantity(productQuantity - 1)}>-</button>
          {productQuantity}
          <button className="btn btn-dark mx-3" onClick={() => setProductQuantity(productQuantity + 1)}>+</button>
        </div>

        <button className='btn btn-dark' onClick={AddtoCart}>  Add To Cart</button>

      </div>
      <div className="container cat">
       <div className='row'>
        <div className="col-md-6">
          {

            product?.images?.length > 0 && <ImageSection images={product.images} />



          }


         </div> 
         
        <div className="col-md-6">
          <div className="conatiner">
            <div className='mb-5'>
              <h2 className="text-center">Reviews Us</h2>
              <p className="text-center text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            </div>

            <div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea6"
                  style={{ height: 200 }}
                  defaultValue={"review"}
                  onChange={(e) => setReview(e.target.value)}
                />
                <label htmlFor="floatingTextarea2">Comments</label>

              </div>
              <div className='mt-4 d-flex align-items-center'>Rate Us :   <ReactStars className='star'
                count={5}
                size={24}
                value={ratingstar}
                onChange={ratingChanged}
                color2={'#ffd700'}
              />
                <span className='ms-3'>({ratingstar})</span>
              </div>
              <button className='my-3 mb-2 btn btn-dark'onClick={SubmitReview}> Submit Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}