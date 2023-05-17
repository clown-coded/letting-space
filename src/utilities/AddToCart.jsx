import axios from "axios"
const baseURL = import.meta.VITE_WP_BASEURL

const AddToCart = (productId, responseRecieved, notificationMessage, buttonStatus) => {
    const idString = productId.toString();
    buttonStatus("Adding to cart...")

    const updateCart = (endpoint) => {
        axios.post(endpoint, {
            id: idString,
            quantity: '1'
        })
            .then((res) => {
                responseRecieved(true);
                buttonStatus("Add to cart");
                notificationMessage("Successfully added to cart")

                const uniqueCartKey = res.data.cart_key;
                const itemCount = res.data.item_count;

                localStorage.setItem('cartKey', uniqueCartKey)
                localStorage.setItem('itemCount', itemCount)
            })
            .catch((err) => {
                console.error(err)
                responseRecieved(true)
                notificationMessage("Sorry there was a problem. Please try agian later")
        })
    }

    if (localStorage.cart_key) {
        const cartEndpoint = `${baseURL}/wp-json/cocart/v2/cart/add-item/?cart_key=${localStorage.cart_key}`
        updateCart(cartEndpoint)
    } else {
       const cartEndpoint = `${baseURL}/wp-json/cocart/v2/cart/add-item`
        updateCart(cartEndpoint) 
    }
    

  return (
    <div>AddToCart</div>
  )
}

export default AddToCart