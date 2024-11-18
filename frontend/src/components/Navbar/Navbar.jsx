import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import StoreContext from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("Menu");
  

  const {token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.Logo2} alt="" className="Logo2" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href ='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-Download' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
        <li onClick={()=>setMenu("Meetings")} className={menu==="Meetings"?"active":""}>Meetings</li>
        <a href='#footer' onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</a>
        <Link to="/appointment" onClick={() => setMenu("Appointment")} className={menu === "Appointment" ? "active" : ""}>
      Appointment
    </Link>
      </ul>
      
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
        <Link to='/cart'> <img src= {assets.basket_icon} alt=""/> </Link>
          <div className="dot">

          </div>
        </div>
        {!token? <button onClick={()=>setShowLogin(true)}>Sign In </button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">

              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>

          </div>}
                 
      </div>
    </div>
  )
}

export default Navbar

