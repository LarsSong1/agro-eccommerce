import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { toast } from "sonner";
import AuthContext from "./AutContext";

// const CartContext = createContext({
//     cart: [],
//     loading: false,
//     getCartItems: () => { },
//     addCartItems: () => { },
//     deleteCartItems: () => { }
// })



// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState()
//     const [loading, setLoading] = useState(false);
//     const { profile } = useContext(AuthContext)

//     const addCartItems = async (product_id, quantity) => {
//         try {
            
//             let { data: Cart, error: errorIdCart } = await supabase
//                 .from('Cart')
//                 .select('*')
//                 .eq('profile_id', profile.id)
//                 .single()

//             const { data: Cart_item, error } = await supabase
//                 .from('Cart_items')
//                 .insert([{ cart_id: Cart.id, product_id, quantity }])
//                 .select()

//             if (errorIdCart) {
//                 toast.error('No se pudo obtener el id del perfil');
//                 setLoading(false);
//                 return;
//             }


//             if (error) {
//                 toast.error('No se pudo añadir al carrito')
//                 setLoading(false);
//             } else {
//                 toast.success('Añadido al carrito')
//                 setCart(prevCart => [...prevCart, Cart_item])
//                 setLoading(false);
//                 // return Cart_item
//             }
//         } catch (err) {
//             throw new Error(err)
//             setLoading(false);
//         }
//     }




//     const deleteCartItems = async (cartItemId) => {
//         try {
//             setLoading(true);
//             const { error } = await supabase
//                 .from('Cart_items')
//                 .delete()
//                 .eq('id', cartItemId);

//             if (error) {
//                 setLoading(false);
//                 toast.error('No fue posible borrar el item')
//                 return null;
//             } else {
//                 toast.success('El item fue borrado')
//             }

//             setCart(prevCart => prevCart.filter((item) => item.id !== cartItemId));
//         } catch (err) {
//             setLoading(false);
//             throw new Error(err)
//         }

//     }

//     const getCartItems = async () => {
//         if (!profile || !profile.id) return;
//         try {
//             setLoading(true);

//             let { data: Cart, error: errorIdCart } = await supabase
//                 .from('Cart')
//                 .select('*')
//                 .eq('profile_id', profile.id)
//                 .single()


//             if (errorIdCart) {
//                 toast.error('No se pudo obtener el id del carrito')
//                 setLoading(false);
//                 return []
//             }

//             let { data: Cart_items, error: cartItemsError } = await supabase
//                 .from('Cart_items')
//                 .select(`*, Products(*, Category(name))`)
//                 .eq('cart_id', Cart.id)

//             if (cartItemsError) {
//                 toast.error('No se pudo obtener items del carrito')
//                 setLoading(false);
//                 return []
//             }


//             setCart(Cart_items)
//             setLoading(false);
//             return Cart_items;


//         } catch (err) {
//             setLoading(false);
//             throw new Error(err)
//         }



//     }










//     return (
//         <CartContext.Provider value={{ cart, getCartItems, deleteCartItems, addCartItems, loading }}>
//             {children}
//         </CartContext.Provider>
//     )
// }




// export default CartContext;


const CartContext = createContext({
    cart: [],
    loading: false,
    getCartItems: () => {},
    addCartItems: () => {},
    deleteCartItems: () => {}
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const { profile } = useContext(AuthContext);

    const addCartItems = async (product_id, quantity) => {
        try {
            setLoading(true);
            const { data: Cart, error: errorIdCart } = await supabase
                .from('Cart')
                .select('*')
                .eq('profile_id', profile.id)
                .single();

            if (errorIdCart) {
                toast.error('No se pudo obtener el carrito');
                setLoading(false);
                return;
            }

            const { data: Product, error: productError } = await supabase
                .from('Products')
                .select('*')
                .eq('id', product_id)
                .single();

            if (productError) {
                toast.error('No se pudo obtener el producto');
                setLoading(false);
                return;
            }

            const { data: Cart_item, error } = await supabase
                .from('Cart_items')
                .insert([{ cart_id: Cart.id, product_id, quantity }])
                .select()
                .single();

            if (error) {
                toast.error('No se pudo añadir al carrito');
                setLoading(false);
            } else {
                toast.success('Añadido al carrito');
                setCart(prevCart => [...prevCart, { ...Cart_item, Products: Product }]);
                setLoading(false);
            }
        } catch (err) {
            toast.error('Error al añadir al carrito');
            setLoading(false);
            console.error(err);
        }
    };

    const deleteCartItems = async (cartItemId) => {
        try {
            setLoading(true);
            const { error } = await supabase
                .from('Cart_items')
                .delete()
                .eq('id', cartItemId);

            if (error) {
                toast.error('No fue posible borrar el item');
                setLoading(false);
                return null;
            } else {
                toast.success('El item fue borrado');
            }

            setCart(prevCart => prevCart.filter((item) => item.id !== cartItemId));
            setLoading(false);
        } catch (err) {
            toast.error('Error al borrar el item del carrito');
            setLoading(false);
            console.error(err);
        }
    };

    const getCartItems = async () => {
        if (!profile || !profile.id) return;
        try {
            setLoading(true);

            const { data: Cart, error: errorIdCart } = await supabase
                .from('Cart')
                .select('*')
                .eq('profile_id', profile.id)
                .single();

            if (errorIdCart) {
                toast.error('No se pudo obtener el id del carrito');
                setLoading(false);
                return [];
            }

            const { data: Cart_items, error: cartItemsError } = await supabase
                .from('Cart_items')
                .select(`*, Products(*, Category(name))`)
                .eq('cart_id', Cart.id);

            if (cartItemsError) {
                toast.error('No se pudo obtener items del carrito');
                setLoading(false);
                return [];
            }

            setCart(Cart_items);
            setLoading(false);
            return Cart_items;
        } catch (err) {
            toast.error('Error al obtener items del carrito');
            setLoading(false);
            console.error(err);
        }
    };

    useEffect(() => {
        if (profile && profile.id) {
            getCartItems();
        }
    }, [profile]);

    return (
        <CartContext.Provider value={{ cart, loading, getCartItems, deleteCartItems, addCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;