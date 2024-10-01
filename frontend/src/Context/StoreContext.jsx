import { createContext, useEffect, useState } from "react";
import { place_list } from "../assets/assets";

export const StoreContext = createContext(null)

export const StoreContextProvider = (props) => {

    const[cartItems,setCartItems] = useState({});

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

    const contextValue = {
        place_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;