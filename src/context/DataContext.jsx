import { createContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { toast } from 'sonner'
import Push from 'push.js'
import { agromaticsLogo } from "../assets/content";



const DataContext = createContext({
    newProducts: [],
    allProducts: [],
    bestProducts: [],
    productsNoLimit: [], 
    expiredProducts: [],
})


export const DataProvider = ({ children }) => {
    const [newProducts, setNewProduct] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [bestProducts, setBestProducts] = useState([])
    const [expiredProduct, setExpiredProduct] = useState([])
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


    const getProductExpired = async ()=> {
        try {
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
    
            const formattedYesterday = yesterday.toISOString().split('T')[0];
    
            let { data: Products, error } = await supabase
                .from('Products')
                .select(`*`)
                .eq('expired_date', formattedYesterday);
    
            if (error) {
                toast.error('Error al obtener productos expirados');
                console.error(error);
            } else {
                if (Products && Products.length > 0) {
                    Products.forEach(product => {
                        // Enviar una notificación por cada producto expirado
                        Push.create('Producto Expirado', {
                            body: `${product.name} expira mañana`,
                            icon: agromaticsLogo,
                            timeout: 1000000,
                            onClick: function () {
                                window.location.href = `http://localhost:5173/`;
                            }
                        });
                    });
                }
                setExpiredProduct(Products)
                return Products;
            }
        } catch (err) {
            throw new Error(err);
        }
    }


    useEffect(() => {
        getNewProduct();
        getAllProducts(limit, 0);
        getBestProducts();
        getProductsNoLimit();
        getProductExpired();
    }, [])

    return (
        <DataContext.Provider value={{ newProducts, loadingData, allProducts, bestProducts, loadMoreProducts, getProductId, productsNoLimit, expiredProduct }}>
            {children}
        </DataContext.Provider>
    )

}


export default DataContext;




