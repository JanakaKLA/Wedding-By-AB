import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, place_list, removeFromCart, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className="cart">
        <div className="cart-item">
          <div className="cart-item-title">
            <p>Items</p>
            <p>Title</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {place_list.map((num, index) => {
            if (cartItems[num._id] > 0) {
              return (
                <div>
                  <div className="cart-item-title cart-item-item">
                    <img src={url + "/images/" + num.image} alt="" />
                    <p>{num.name}</p>
                    <p onClick={()=>removeFromCart(num._id)} className='cross'>x</p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
