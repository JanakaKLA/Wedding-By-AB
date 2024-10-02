// import React, { useContext } from 'react'
// import './ItemDisplay.css'
// import { StoreContext } from '../../Context/StoreContext'
// import PlaceItem from '../PlaceItem/PlaceItem'

// const ItemDisplay = ({category}) => {

//     const {place_list} = useContext(StoreContext)
//   return (
//     <div className='Item-display' id='item-display'>
//         <h2>Top choises.</h2>
//         <div className="item-display-list">
//             {place_list.map((num,index)=>{
//               if (category==="All" || category===num.category){
//                 return <PlaceItem key={index} id={num._id} name={num.name} description={num.description} price={num.price} image={num.image}/>
//               }
               
//             })}
//         </div>
//     </div>
//   )
// }

// export default ItemDisplay

// import React, { useContext } from 'react';
// import './ItemDisplay.css';
// import { StoreContext } from '../../Context/StoreContext';
// import PlaceItem from '../PlaceItem/PlaceItem';

// const ItemDisplay = ({ category }) => {
//     const { place_list } = useContext(StoreContext);

//     return (
//         <div className='Item-display' id='item-display'>
//             <h2>Top choices.</h2>
//             <div className="item-display-list">
//                 {place_list.map((num, index) => {
//                     if (category === "All" || category === num.category) {
//                         return (
//                             <PlaceItem 
//                                 key={index} 
//                                 id={num._id} 
//                                 name={num.name} 
//                                 description={num.description} 
//                                 price={num.price} 
//                                 image={num.image} 
//                                 fbLink={num.fbLink} // Pass fbLink as a prop
//                             />
//                         );
//                     }
//                     return null; // Ensure to return null if the condition is not met
//                 })}
//             </div>
//         </div>
//     );
// }

// export default ItemDisplay;


import React, { useContext } from 'react';
import './ItemDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import PlaceItem from '../PlaceItem/PlaceItem';

const ItemDisplay = ({ category }) => {
    const { place_list } = useContext(StoreContext);

    return (
        <div className='Item-display' id='item-display'>
            <h2>Top choices.</h2>
            <div className="item-display-list">
                {place_list.map((num, index) => {
                    if (category === "All" || category === num.category) {
                        return (
                            <PlaceItem 
                                key={index} 
                                id={num._id} 
                                name={num.name} 
                                description={num.description}  
                                image={num.image} 
                                fbLink={num.fbLink} // Pass fbLink as a prop
                                instagramLink={num.instagramLink} // Pass instagramLink as a prop
                            />
                        );
                    }
                    return null; // Ensure to return null if the condition is not met
                })}
            </div>
        </div>
    );
}

export default ItemDisplay;
