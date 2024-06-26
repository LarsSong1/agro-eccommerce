import { createContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { toast } from 'sonner'



const DataContext = createContext({
    newProducts: [],
    allProducts: [],
    bestProducts: [],
    productsNoLimit: []
})


export const DataProvider = ({ children }) => {
    const [newProducts, setNewProduct] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [bestProducts, setBestProducts] = useState([])
    const [productsNoLimit, setProductsNoLimit] = useState([])
    const [pagination, setPagination] = useState(0)
    const [loadingData, setLoadingData] = useState(true)
    const limit = 8



    const getNewProduct = async () => {
        try {
            let { data: Products, error } = await supabase.
                from('Products')
                .select(`*,
                    Category (
                        name
                    )
                    `)
                .eq('new_product', true);

            if (error) {
                toast.error('Error al obtener new Product');
                setLoadingData(true);
            } else {
                setNewProduct(Products);
                setLoadingData(false)
            }


        } catch (err) {
            throw new Error(err);
        }
    }

    const getAllProducts = async (limit, pagination) => {
        try {
            let { data: Products, error } = await supabase
                .from('Products')
                .select(`*,
                    Category (
                        name
                    )
                `)
                .range(pagination, pagination + limit - 1)
             

            if (error) {
                toast.error('No hay Productos')
                setLoadingData(true)
            } else {
                const combinedProducts = [...allProducts, ...Products];
                const uniqueProducts = Array.from(new Set(combinedProducts.map(product => product.id)))
                    .map(id => {
                        return combinedProducts.find(product => product.id === id);
                    });
                setAllProducts(uniqueProducts);
                setLoadingData(false)
            }

        } catch (err) {
            throw new Error(err);
        }
    }

    const getProductsNoLimit = async () => {
        try {
            let { data: Products, error } = await supabase
                .from('Products')
                .select(`*,
                    Category (
                        name
                    )
                `)

            if (error) {
                toast.error('No hay Productos')
                setLoadingData(true)
            } else {
                const combinedProducts = [...allProducts, ...Products];
                const uniqueProducts = Array.from(new Set(combinedProducts.map(product => product.id)))
                    .map(id => {
                        return combinedProducts.find(product => product.id === id);
                    });
                setProductsNoLimit(uniqueProducts);
                setLoadingData(false)
            }

        } catch (err) {
            throw new Error(err);
        }
    }

    const loadMoreProducts = async () => {
        const newPagination = pagination + limit;
        await getAllProducts(limit, newPagination);
        setPagination(newPagination);
    }

    const getBestProducts = async () => {
        try {
            let { data: BestProducts, error } = await supabase
                .from('Products')
                .select(`*,
                    Category (
                        name
                    )
                    
                    `)
                .eq('best_product', true)


            if (error) {
                toast.error('Error al obtener Best P.')
                setLoadingData(true)
            } else {
                setBestProducts(BestProducts)
            }
        } catch (err) {
            throw new Error(err)


        }
    }

    const getProductId = async (product_id) => {
        try {
            let { data: Product, error } = await supabase
                .from('Products')
                .select(`*, 
                Category (
                    name
                )
            `)
                .eq('id', product_id)
                .single()

            if (error) {
                toast.error('Error al obtener producto')
                console.error(error)
            }else {
                return Product
            }
        } catch (err) {
            throw new Error(err)
        }
    }




    useEffect(() => {
        getNewProduct();
        getAllProducts(limit, 0);
        getBestProducts();
        getProductsNoLimit();
    }, [])

    return (
        <DataContext.Provider value={{ newProducts, loadingData, allProducts, bestProducts, loadMoreProducts, getProductId, productsNoLimit }}>
            {children}
        </DataContext.Provider>
    )

}


export default DataContext;




