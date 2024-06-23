import React, { createContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import { toast } from 'sonner'

const CategoryContext = createContext({
    categoryName: []
})

export const CategoryProvider = ({ children }) => {
    const [categoryName, setCategoryName] = useState([])
    const [categoryError, setCategoryError] = useState(null)

    const getCategory = async () => {
        try {
            let { data: category, error } = await supabase
                .from('Category')
                .select('*')
                                        
            if (error) {
                setCategoryError('Category not found')
            } else {
                setCategoryName(category)
                setCategoryError(null)
            }
        } catch (err) {
            setCategoryError(err.message)
        }





    }

    if (categoryError) {
        toast.error('No se obtuvo categorias')
    }


    useEffect(() => {
        getCategory();
    }, [])






    return (
        <CategoryContext.Provider value={{ categoryName }}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContext

