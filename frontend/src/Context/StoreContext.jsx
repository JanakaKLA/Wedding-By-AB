import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null)

export const StoreContextProvider = (props) => {

    const[cartItems,setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token,setToken] = useState("");
    const [place_list,setPlaceList] = useState([])

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])


    const fetchPlaceList = async () => {
        const response = await axios.get(url+"/api/wedding/list");
        setPlaceList(response.data.data)
    }

    useEffect(()=>{
        async function loadData() {
            await fetchPlaceList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])


    const contextValue = {
        place_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        url,
        token,
        setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;