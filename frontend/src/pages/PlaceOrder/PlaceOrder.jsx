// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./PlaceOrder.css";

// const PlaceOrder = () => {
//   const [weddingDate, setWeddingDate] = useState(null);

//   return (
//     <form className="place-order">
//       <div className="place-order-left">
//         <p className="title">Customer Information</p>
//         <div className="multi-fields">
//           <input type="text" placeholder="First name" />
//           <input type="text" placeholder="Last name" />
//         </div>
//           <input type="email" placeholder="Email Address" />
//           <input type="text" placeholder="Address" />
//        {/* React Datepicker */}
//        <DatePicker
//           selected={weddingDate}
//           onChange={(date) => setWeddingDate(date)}
//           placeholderText="Select Wedding Date"
//           dateFormat="MM/dd/yyyy"
//           showMonthDropdown
//           showYearDropdown
//           dropdownMode="select" // Enables dropdown for month and year
//           inputMode="none" // Prevents the spinner from appearing
//         />
          
//           <input type="text" placeholder="phone" />
//           <button>submit</button>
//       </div>
      
//     </form>
//   );
// };

// export default PlaceOrder;


import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [weddingDate, setWeddingDate] = useState(null);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Customer Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Address" />
        
        {/* React Datepicker */}
        <DatePicker
          selected={weddingDate}
          onChange={(date) => setWeddingDate(date)}
          placeholderText="Wedding Date"
          dateFormat="MM/dd/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select" // Enables dropdown for month and year
          popperClassName="custom-datepicker" // Custom class to apply styles
        />
        
        <input type="text" placeholder="Phone" />
       
        <div className="place-order-bottom">
         <button type="submit">Submit</button>
      </div>
      </div>

    </form>
  );
};

export default PlaceOrder;
