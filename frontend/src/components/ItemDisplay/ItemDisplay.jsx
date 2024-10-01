import React, { useContext } from 'react'
import './ItemDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import PlaceItem from '../PlaceItem/PlaceItem'

const ItemDisplay = ({category}) => {

    const {place_list} = useContext(StoreContext)
  return (
    <div className='Item-display' id='item-display'>
        <h2>Top choises.</h2>
        <div className="item-display-list">
            {place_list.map((num,index)=>{
              if (category==="All" || category===num.category){
                return <PlaceItem key={index} id={num._id} name={num.name} description={num.description} price={num.price} image={num.image}/>
              }
               
            })}
        </div>
    </div>
  )
}

export default ItemDisplay