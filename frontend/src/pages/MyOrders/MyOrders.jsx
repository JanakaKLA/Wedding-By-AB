// import React, { useEffect } from "react";
// import './MyOrders.css'
// import { useContext,useState } from "react";
// import StoreContext from "../../Context/StoreContext";
// import axios from "axios";
// import { assets } from "../../assets/assets";

// const MyOrders = () => {
//     const {url,token} = useContext(StoreContext);
//     const [data, setData] =useState([]);

//     const fetchOrders = async () => {
//         const response = await axios.post(url + "/api/order/userorders",{},{headers:{token}});
//         setData(response.data.data);
//         console.log(response.data.data);
//     }

//     useEffect(()=>{
//         if(token){
//             fetchOrders();
//         }
//     },[token]);


//     return(
//         <div className="my-orders">
//             <h2>My Choices</h2>
//             <div className="container">
//                 {data.map((order,index)=>{
//                     return(
//                         <div key={index} className="my-orders-order">
//                             <img src={assets.parcel_icon} alt=""/>
//                             <p>{order.items.map((item,index) => {
//                                 if(index === order.items.length-1){
//                                     return item.name;
//                                 }
//                                 else{
//                                     return item.name + ", "
//                                 }
//                             })}</p>
//                             <p>Total Items: {order.items.length}</p>
//                             <p><span>&#x25cf;</span><b>{order.status}</b></p>
//                             <button onClick={fetchOrders}>update</button>
//                         </div>

//                     )
//                 })}
//             </div>

//         </div>
//     )
// }
// export default MyOrders;




// import React, { useEffect, useState } from "react";
// import './MyOrders.css';
// import { useContext } from "react";
// import StoreContext from "../../Context/StoreContext";
// import axios from "axios";
// import { assets } from "../../assets/assets";

// const MyOrders = () => {
//     const { url, token } = useContext(StoreContext);
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchOrders = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.post(
//                 url + "/api/order/userorders",
//                 {},
//                 { headers: { token } }
//             );
//             setData(response.data.data);
//         } catch (err) {
//             setError("Failed to load orders. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (token) fetchOrders();
//     }, [token]);

//     if (loading) return <div className="loader">Loading...</div>;
//     if (error) return <div className="error">{error}</div>;

//     return (
//         <div className="my-orders">
//             <h2>My Choices</h2>
//             {data.length === 0 ? (
//                 <p className="no-orders">You have no orders yet.</p>
//             ) : (
//                 <div className="container">
//                     {data.map((order, index) => (
//                         <div key={index} className="my-orders-order">
//                             <img src={assets.parcel_icon} alt="Parcel Icon" />
//                             <p>
//                                 {order.items.map((item, idx) => (
//                                     <span key={idx}>{item.name}</span>
//                                 ))}
//                             </p>
//                             <p>Total Items: {order.items.length}</p>
//                             <p>
//                                 <span className={`status-dot ${order.status.toLowerCase()}`}></span>
//                                 <b>{order.status}</b>
//                             </p>
//                             <button onClick={fetchOrders}>Update</button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MyOrders;



import React, { useEffect, useState } from "react";
import './MyOrders.css';
import { useContext } from "react";
import StoreContext from "../../Context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const response = await axios.post(
                url + "/api/order/userorders",
                {},
                { headers: { token } }
            );
            setData(response.data.data);
        } catch (err) {
            setError("Failed to load orders. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) fetchOrders();
    }, [token]);

    if (loading) return <div className="loader">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="my-orders">
            <h2>My Orders</h2>
            {data.length === 0 ? (
                <p className="no-orders">You have no orders yet.</p>
            ) : (
                <div className="container">
                    {data.map((order, index) => (
                        <div key={index} className="my-orders-order">
                            <img src={assets.parcel_icon} alt="Parcel Icon" />
                            <div className="order-details">
                                <p className="order-items">
                                    <strong>Vendor Names:</strong>{" "}
                                    {order.items.map((item, idx) => (
                                        <span key={idx}>
                                            {item.name}
                                            {idx < order.items.length - 1 ? ", " : ""}
                                        </span>
                                    ))}
                                </p>
                                <p><strong>No. of Vendors:</strong> {order.items.length}</p>
                                <p>
                                    <strong>Status:</strong>{" "}
                                    <span className={`status-dot ${order.status.toLowerCase()}`}></span>
                                    <b>{order.status}</b>
                                </p>
                            </div>
                            <button onClick={fetchOrders} className="update-button">
                                Update
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrders;


