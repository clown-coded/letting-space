import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Product URL
const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL;


const Book = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${productsUrl}`)
            .then((res) => {
                setProducts(res.data)
                setLoading(false)
            })
        .catch((err) => console.error(err))
    }, [])

    const Products = ({ products }) => {
        const mappedProducts = products.map((product, index) => {

            function getFeaturedImage(product) {
                if (product && product.images && product.images[0]) {
                    return product.images[0].src;
                } else {
                    return 'http://via.placeholder.com/150'
                }
            }

            return (
                <div className='product-container item-container' key={index}>
                    <img className='product-image' src={getFeaturedImage(product)} alt='Product Image' />
                    <Link className='product-link'
                        to={`/product/${product.id}`}>
                        <h4 className='name'>{product.name}</h4>
                    </Link>
                    <h3 className='name'>${product.prices.price} {product.prices.curreny_code}</h3>
                </div>
            )
        })

        return (
            <>
                {mappedProducts}
            </>
        )
    }

  return (
      <div id='shop-page' className='book-content'>
          
          <div id='product-grid' className='grid-container'>
              {loading ? <p>Loading...</p> : <Products products={products}/>}
              
          </div>
    </div>
  )
}

export default Book