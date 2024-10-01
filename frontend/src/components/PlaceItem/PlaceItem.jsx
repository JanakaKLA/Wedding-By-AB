import React, { useContext } from 'react'
import './PlaceItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const PlaceItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='place-item'>
        <div className="place-item-img-container">
            <img className='place-item-image' src={image} alt='' />
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                :<div className='place-item-counter'>
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='' />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='' />
                 </div> 
            }


        </div>
        <div className="place-item-info">
            <div className="place-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt='' />
            </div>
            <p className="place-item-desc">{description}</p>
            <p className="place-item-price">${price}</p>
        </div>

    </div>
  )
}

export default PlaceItem