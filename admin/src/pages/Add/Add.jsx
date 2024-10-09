import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {

  const url = "http://localhost:4000";
  const [image, setImage] = useState(null); 
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Jewellery",
    fbLink: "", // Add Facebook Link
    instagramLink: "" // Add Instagram Link
  });
  const [message, setMessage] = useState(""); // Add feedback message

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("fbLink", data.fbLink); 
    formData.append("instagramLink", data.instagramLink); 
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/wedding/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          category: "Jewellery",
          fbLink: "", 
          instagramLink: "" 
        });
        setImage(null); 
        toast.success(response.data.message)

      } else {
        setMessage("Failed to add item."); 
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again."); // Handle error
    }
  };

  return (
    <div className='add'>
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Item name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Item description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
        </div>
        <div className="add-category">
          <div className="add-category flex-col">
            <p>Item category</p>
            <select onChange={onChangeHandler} value={data.category} name="category">
              <option value="Jewellery">Jewellery</option>
              <option value="Stationary">Stationary</option>
              <option value="Bridal attire">Bridal attire</option>
              <option value="Grooms attire">Grooms attire</option>
              <option value="Shoes">Shoes</option>
              <option value="Reception">Reception</option>
              <option value="Flowers">Flowers</option>
              <option value="Cake">Cake</option>
              <option value="Photography">Photography</option>
              <option value="Videography">Videography</option>
              <option value="Bridal Dressing">Bridal Dressing</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Rituals">Rituals</option>
              <option value="Sarees">Sarees</option>
            </select>
          </div>
        </div>
        {/* Facebook Link Input */}
        <div className="add-product-facebook flex-col">
          <p>Facebook Link</p>
          <input onChange={onChangeHandler} value={data.fbLink} type="text" name='fbLink' placeholder='https://facebook.com/' />
        </div>
        {/* Instagram Link Input */}
        <div className="add-product-instagram flex-col">
          <p>Instagram Link</p>
          <input onChange={onChangeHandler} value={data.instagramLink} type="text" name='instagramLink' placeholder='https://instagram.com/' />
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
      {message && <p className="message">{message}</p>} {/* Display success/error message */}
    </div>
  );
};

export default Add;
