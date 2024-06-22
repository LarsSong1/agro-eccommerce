import { createContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { toast } from 'sonner'



const DataContext = createContext({
    newProducts: []
})


export const DataProvider = ({ children }) => {
    const [newProducts, setNewProduct] = useState([])
    const [loadingData , setLoadingData] = useState(true)


    const getNewProduct = async () => {
        try {
            let { data: Products, error } = await supabase.
                from('Products')
                .select('*')
                .eq('new_product', true);
    
            if (error) {
                toast.error('Error al obtener new Product');
                setLoadingData(true);
            }else{
                setNewProduct(Products);
                setLoadingData(false)
            }
    
    
        } catch (err) {
            throw new Error(err);
        }
    }

    useEffect(()=>{
      getNewProduct();
    },[])

    return (
        <DataContext.Provider value={{newProducts, loadingData}}>
            {children}
        </DataContext.Provider>
    )

}


export default DataContext;




