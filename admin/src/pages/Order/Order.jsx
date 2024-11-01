import React, { useEffect, useState } from 'react'
import './Order.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Order = ({url}) => {

  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const statusHandler = async (event,orderId) => {
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if (response.data.success){
      await fetchAllOrders()
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[])


  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-wedding">
                {order.items.map((item,index)=>{
                  if (index===order.items.length-1){
                    return item.name
                  }
                  else {
                    return item.name + " , " 
                  }
                })}
              </p>
              <p className='order-item-name'>{order.address.firstName+" "+order.address.lastName}</p>
              <p className="order-item-address">{order.address.address}</p>
              <p className="order-item-email">{order.address.email}</p>
              <p className="order-item-date">{order.address.weddingDate}</p>
              <p className="order-item-phone">{order.address.phone}</p>

            </div>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                <option value="Wedding Processing">Processing</option>
                <option value="Wedding Complete">Complete</option>
              </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order