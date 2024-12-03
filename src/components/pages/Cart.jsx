import React, { useContext } from 'react'
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import EcomContext from '../../context/EcomContext';

function Cart() {
    const { cartItems, removeCartItems, updateCartItem, calcSubTotalAmount, calTotalAmount, calcVatAmount } = useContext(EcomContext)
    const newcart = cartItems?.products?.map((items) => (
        <tr key={items.id}>
            <td>{items.id}</td>
            <td>{items.product.name}</td>
            <td>${items.product.price}</td>
            <td><input type="number" className='w-24 border-none outline-none p-1' name="" min="1" value={items.quantity} onChange={(e) => updateCartItem(parseInt(items.product.id), e.target.value)} id="items" /></td>
            <td>{items.quantity}</td>
            <td>{items.amount}</td>
            <td><button type="submit" onClick={() => removeCartItems(items.product.id)}><FaXmark className='text-2xl' /></button></td>
        </tr>
    ));
    // {console.log(newcart)};
  return (
    <div className='container-box mt-12 mb-12'>
      <div className="table">
        <table>
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {cartItems?.products?.length > 0 ? (
                    newcart
                ) : ( 
                    <tr>
                        <td colSpan={"7"}>
                            <h6 className="m-auto uppercase text-center">No cart Items</h6>
                        </td>
                    </tr>
                )}
                {/* {cartItems.length > 0 ? (newcart) : (<h6 className='m-auto text-center uppercase'>No items in cart</h6>)} */}
                {/* <tr>
                    <td>2</td>
                    <td>Product 2</td>
                    <td>$123</td>
                    <td><input type="number" className='w-24 border-none outline-none p-1' name="" id="" /></td>
                    <td>2</td>
                    <td>$60.89</td>
                    <td><button type="submit"><FaXmark className='text-2xl' /></button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Product 3</td>
                    <td>$123</td>
                    <td><input type="number" className='w-24 border-none outline-none p-1' name="" id="" /></td>
                    <td>2</td>
                    <td>$60.89</td>
                    <td><button type="submit"><FaXmark className='text-2xl' /></button></td>
                </tr> */}
            </tbody>
        </table>

        <table>
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Subtotal: ${calcSubTotalAmount()}</td>
                </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>VAT(7.5%): ${calcVatAmount()}</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total: ${calTotalAmount()}</td>
                </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><Link to="/checkout" className='btn hover:bg-purple-500 text-white'>Checkout</Link></td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart
