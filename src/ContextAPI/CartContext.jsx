import React, {useContext, createContext, useState} from 'react'//import useContext, createContext
const CartContext = createContext({//use create context hook imported from react
    items: [],//main items
    addItem: (item) =>{},//add item function to add new item into the items array
    removeItem: (id)=>{},//remove item function to remove the item
    updateQuantity: (id)=>{},//update quantity function
    clearCart:()=>{},//delete everything from cart fucntion
});
export const useCart = () => useContext(CartContext)//create a custom hook
export function CartContextProvider({children}){//create a function to export, it will bind the whole app in main.jsx file
    const [cartItems, setCartItems] = useState([]);//state for cart items to be added
    const addItem = (item) =>{//function to add items with item arguement
        setCartItems((prevItems)=>{//function inside setCartItems state with prevItems arguement representing previous items
            return[...prevItems, {...item}];
        })
    }
    const contextValue = {//context value object for exporting
        items: cartItems,
        addItem,

    }
    return(
        <>
        <CartContext.Provider value={contextValue}>{/*Same name as the create context hook + .provider*/}
            {children}
        </CartContext.Provider>
        </>
    )
}