import { useEffect, useState } from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import AddToCart from '../utilities/AddToCart'
import Notification from '../utilities/Notification'

const productsURL = import.meta.env.VITE_WC_PRODUCTS_URL;

const Product = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [responseRecieved, setResponse] = useState(false)
    const [notification, setNotification] = useState("")
    const [buttonStatus, updateButtonStatus] = useState("Add to cart")
    
    const endpoint = `${productsURL}/${id}`

    useEffect(() => {
        axios.get(`${endpoint}`)
            .then((res) => {
                setProduct(res.data)
                setLoading(false)
            
            })
        .catch((err) => {
            console.log(err);
            setLoading(false)
        })
    }, [endpoint])

    if (loading) {
        return <>Loading...</>
    }

    function getFeaturedImage(product) {
                if (product && product.images && product.images[0]) {
                    return product.images[0].src;
                } else {
                    return 'http://via.placeholder.com/150'
                }
            }

  return (
      <>
          <div className='book-content'>
              <div className='product-container'>
                     <div className='book-details'>
                     <h4>{product.name}</h4>
                  <h3>${product.prices.price }</h3>
                     </div>
                  
                  <img className='product-image' src={getFeaturedImage(product)} alt='Product Image' />
              </div>
              <div id='product-description' dangerouslySetInnerHTML={{ __html: product.description }} />
              
              <div id='tools'>
                  <button id='add-to-cart-button' onClick={() => {
                      AddToCart(
                          product.id,
                          setResponse,
                          setNotification,
                          updateButtonStatus
                      )
                  }}>
                      {buttonStatus}
                  </button>
                  {/* custom message for the user when a product is added */}
                  {responseRecieved && <Notification type={notification} />}
                  {/* back button */}
                  <button
                  onClick={() => navigate(-1)}>
                      <ArrowLeft/> Go back
                  </button>
              </div>
          </div>
      </>
  )
}

export default Product