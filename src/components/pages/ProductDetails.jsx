import React, { useContext } from 'react'
import EcomContext from "../../context/EcomContext"
import { useParams } from "react-router-dom"

function ProductDetails() {
    const { product, addToCart } = useContext(EcomContext);
    const params = useParams();
    const showItem = params.id;
    const productItem = product.find(items => items.id === parseInt(showItem) )
    // const productItem = product.find(items => items.id === parseInt(showItem) || showItem )
    // console.log(productItem);
    
  return (
    <div>
      <h3>{productItem?.name}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center">
        <div>
            <img src={productItem?.img} className='w-full h-full object-cover' alt="" />
        </div>
        <div>
            <div className="space-y-3">
                <h3 className="capitalize">{productItem?.name}</h3>
                <p>{productItem?.description}</p>
                <h5>${productItem?.price}</h5>
                <button
              // onClick={() => addToCart({ ...productItem, quantity: 1 })}
              onClick={() => addToCart(productItem.id, 1, productItem)} 
              type="submit"
              className="w-full p-2 bg-purple-300 hover:bg-purple-500">
              Add to cart
      </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails
