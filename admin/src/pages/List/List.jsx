import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {


  const [list,setList] = useState([]);

  const fetctList = async () => {
    const response = await axios.get(`${url}/api/wedding/list`);

    if(response.data.success) {
      setList(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const removewedList = async(wedId) => {
    const response = await axios.post(`${url}/api/wedding/remove`,{id:wedId});
    await fetctList();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else{
      toast.error("Error");
    }
  }
   

  useEffect(()=>{
    fetctList();
  },[])


  return (
    <div className='list add flex-col'>
      <p>All List</p>
      <div className="list-table">
        <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Facebook</b>
            <b>Instergram</b>
            <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return (
            <div key ={index} className="list-table-format">
                <img src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.facebook}</p>
                <p>{item.instagram}</p>
                <p onClick={()=>removewedList(item._id)} className='cursor'>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List