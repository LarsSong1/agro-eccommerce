import React, { createContext, useState } from 'react'

export const DrawerContext = createContext();



export const DrawerProvider = ({ children }) => {
    const [open, setOpen] = useState(false)

    const toggleDrawer = (state) => () => {
        setOpen(state);
    };

    return (
        <DrawerContext.Provider value={{open, toggleDrawer}}>
            {children}
        </DrawerContext.Provider>
    )
}

export default DrawerContext