// // // import React, { useContext } from 'react'
// // // import './PlaceItem.css'
// // // import { assets } from '../../assets/assets'
// // // import { StoreContext } from '../../Context/StoreContext'

// // // const PlaceItem = ({id,name,price,description,image}) => {

// // //     const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

// // //   return (
// // //     <div className='place-item'>
// // //         <div className="place-item-img-container">
// // //             <img className='place-item-image' src={image} alt='' />
// // //             {!cartItems[id]
// // //                 ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
// // //                 :<div className='place-item-counter'>
// // //                         <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='' />
// // //                         <p>{cartItems[id]}</p>
// // //                         <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='' />
// // //                  </div> 
// // //             }


// // //         </div>
// // //         <div className="place-item-info">
// // //             <div className="place-item-name-rating">
// // //                 <p>{name}</p>
// // //                 <img src={assets.rating_starts} alt='' />
// // //             </div>
// // //             <p className="place-item-desc">{description}</p>
// // //             <p className="place-item-price">${price}</p>
// // //         </div>

// // //     </div>
// // //   )
// // // }

// // // export default PlaceItem

// // import React, { useContext } from 'react';
// // import './PlaceItem.css';
// // import { assets } from '../../assets/assets';
// // import { StoreContext } from '../../Context/StoreContext';

// // const PlaceItem = ({ id, name, price, description, image, fbLink }) => { // Added fbLink here
// //     const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

// //     return (
// //         <div className='place-item'>
// //             <div className="place-item-img-container">
// //                 <img className='place-item-image' src={image} alt='' />
// //                 {!cartItems[id] ? (
// //                     <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
// //                 ) : (
// //                     <div className='place-item-counter'>
// //                         <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='' />
// //                         <p>{cartItems[id]}</p>
// //                         <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='' />
// //                     </div>
// //                 )}
// //             </div>
// //             <div className="place-item-info">
// //                 <div className="place-item-name-rating">
// //                     <p>{name}</p>
// //                     <img src={assets.rating_starts} alt='' />
// //                 </div>
// //                 <p className="place-item-desc">{description}</p>
// //                 <p className="place-item-price">${price}</p>

// //                 {/* Facebook Link Button */}
// //                 {fbLink && (
// //                     <a href={fbLink} target="_blank" rel="noopener noreferrer">
// //                         <button className="fb-button">View on Facebook</button>
// //                     </a>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }

// // export default PlaceItem;
// import React, { useContext } from 'react';
// import './PlaceItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../Context/StoreContext';

// const PlaceItem = ({ id, name, price, description, image, fbLink, instagramLink }) => { // Added instagramLink here
//     const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

//     return (
//         <div className='place-item'>
//             <div className="place-item-img-container">
//                 <img className='place-item-image' src={image} alt='' />
//                 {!cartItems[id] ? (
//                     <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
//                 ) : (
//                     <div className='place-item-counter'>
//                         <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='' />
//                         <p>{cartItems[id]}</p>
//                         <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='' />
//                     </div>
//                 )}
//             </div>
//             <div className="place-item-info">
//                 <div className="place-item-name-rating">
//                     <p>{name}</p>
//                     <img src={assets.rating_starts} alt='' />
//                 </div>
//                 <p className="place-item-desc">{description}</p>
//                 <p className="place-item-price">${price}</p>

//                 {/* Facebook Link Button */}
//                 {fbLink && (
//                     <a href={fbLink} target="_blank" rel="noopener noreferrer">
//                         <button className="social-button fb-button">View on Facebook</button>
//                     </a>
//                 )}
                
//                 {/* Instagram Link Button */}
//                 {instagramLink && (
//                     <a href={instagramLink} target="_blank" rel="noopener noreferrer">
//                         <button className="social-button ig-button">View on Instagram</button>
//                     </a>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default PlaceItem;
import React, { useContext } from 'react';
import './PlaceItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const PlaceItem = ({ id, name, price, description, image, fbLink, instagramLink }) => {
    const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);

    return (
        <div className='place-item'>
            <div className="place-item-img-container">
                <img className='place-item-image' src={url+"/images/"+image} alt='' />
                {!cartItems[id] ? (
                    <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
                ) : (
                    <div className='place-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='' />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='' />
                    </div>
                )}
            </div>
            <div className="place-item-info">
                <div className="place-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='' />
                </div>
                <p className="place-item-desc">{description}</p>
               

                {/* Button Container */}
                <div className="button-container">
                    {/* Facebook Link Button */}
                    {fbLink && (
                        <a href={fbLink} target="_blank" rel="noopener noreferrer">
                            <button className="social-button fb-button">Facebook</button>
                        </a>
                    )}
                    
                    {/* Instagram Link Button */}
                    {instagramLink && (
                        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                            <button className="social-button ig-button">Instagram</button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PlaceItem;
