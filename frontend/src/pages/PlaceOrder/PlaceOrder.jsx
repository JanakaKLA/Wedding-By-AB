import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PlaceOrder.css";
import StoreContext from "../../Context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [weddingDate, setWeddingDate] = useState(null);
  const { token, place_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    try {
      let orderItems = [];
      place_list.forEach((num) => {
        if (cartItems[num._id] > 0) {
          let itemInfo = num;
          itemInfo["quantity"] = cartItems[num._id];
          orderItems.push(itemInfo);
        }
      });

      let orderData = {
        address: data,
        weddingDate: weddingDate,
        items: orderItems,
      };

      let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });

      console.log("Order response:", response.data);

      if (response.data.success) {
        console.log("Order submitted successfully!");
        //alert("Order submitted successfully!");
        toast.success("Order submitted successfully!")
        // Reset form logic if needed
      } else {
        console.error("Error placing order:", response.data);
        //alert("Error: Please try again.");
        toast.error("Error: Please try again.")
      }
    } catch (error) {
      console.error("Error during order placement:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={placeOrder} className="place-order">
      {/* Form Fields */}
      <div className="place-order-left">
        <p className="title">Customer Information</p>
        <div className="multi-fields">
          <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First name" />
          <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last name" />
        </div>
        <input required name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email Address" />
        <input required name="address" onChange={onChangeHandler} value={data.address} type="text" placeholder="Address" />
        
        <DatePicker
          selected={weddingDate}
          onChange={(date) => setWeddingDate(date)}
          placeholderText="Wedding Date"
          dateFormat="MM/dd/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />

        <input required name="phone" onChange={onChangeHandler} value={data.phone} type="tel" placeholder="Phone" pattern="[0-9]{10}" />
        
        <div className="place-order-bottom">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
