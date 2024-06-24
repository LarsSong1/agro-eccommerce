import React, { createContext, useState, useRef, useEffect } from 'react'

export const DrawerContext = createContext();



export const DrawerProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const refCart = useRef(null);

    const toggleDrawer = (state) => () => {
        setOpen(state);
    };


    const toggleCartDrawer = (state) => () => {
    
            setCartOpen(state)

    }


    const handleClickOutside = (event) => {
        if (refCart.current && !refCart.current.contains(event.target)) {
            setCartOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <DrawerContext.Provider value={{open, toggleDrawer, cartOpen, toggleCartDrawer, refCart}}>
            {children}
        </DrawerContext.Provider>
    )
}

export default DrawerContext;