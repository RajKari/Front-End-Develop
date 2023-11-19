import React, { useContext } from 'react'
import './CartItem.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const CartItem = () => {
    const { all_product, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Titel</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
        {all_product.map
        ((event, index)=>{
            if (cartItems[event.id]>0)
            {
                return          <div key={index}>
                                    <div className="cartitems-format cartitems-format-main">
                                        <img src={event.image} alt=""  className="cart-product-icon" />
                                        <p>{event.name}</p>
                                        <p>${event.new_price}</p>
                                        <button className="cartitems-quantity">{cartItems[event.id]}</button>
                                        <p>{event.new_price*cartItems[event.id]}</p>
                                        <img src={remove_icon} className='cartitems-remove-icon' alt="" onClick={()=>{removeFromCart(event.id)}} />
                        
                                    </div>
                                    <hr />
                                </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtatal</p>
                        <p>${() => getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Total</p>
                        <p>${()=>getTotalCartAmount()}</p>
                    </div>
                </div>
                    <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text"  placeholder='Promo Code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem
