import React from 'react'
import './ExploreMenu.css'
import { item_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Items</h1>
        <p className='explore-menu-text'>let us embark together on this romantic journey, turning your dream wedding into a cherished reality. We eagerly anticipate the opportunity to make your special day an unforgettable experence.</p>
        <div className='explore-menu-list'>
            {item_list.map((num,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===num.item_name?"All":num.item_name)} key={index} className='explore-menu-list-num'>
                        <img className={category===num.item_name?"active":""} src={num.item_image} alt=""/>
                        <p>{num.item_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu