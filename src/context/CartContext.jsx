import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { toast } from "sonner";
import AuthContext from "./AutContext";




const CartContext = createContext({
    cart: [],
    loading: false,
    getCartItems: () => { },
    addCartItems: () => { },
    deleteCartItems: () => { }
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const { profile } = useContext(AuthContext);



    const createCart = async () => {
        try {
            const { data: newCart, error: createCartError } = await supabase
                .from('Cart')
                .insert([{ profile_id: profile.id }])
                .select()
                .single();

            if (createCartError) {
                toast.error('Error al crear carrito');
                setLoading(false);
                return null;
            }

            return newCart;
        } catch (err) {
            toast.error('Error al crear el carrito')
            setLoading(false);
            return null;
        }
    }

    const addCartItems = async (product_id, quantity) => {
        try {
            setLoading(true);
            let { data: Cart, error: errorIdCart } = await supabase
                .from('Cart')
                .select('*')
                .eq('profile_id', profile.id)
                .single();


            if (!Cart) {
                Cart = await createCart();
                if (!Cart) return;
            }

            if (errorIdCart) {
                toast.error('No hay carrito, creando');
                setLoading(false);
                return;
            }

            const { data: Product, error: productError } = await supabase
                .from('Products')
                .select('*, Category(*)')
                .eq('id', product_id)
                .single();

            if (productError) {
                toast.error('No se pudo obtener el producto');
                setLoading(false);
                return;
            }

            const { data: Cart_item, error } = await supabase
                .from('Cart_items')
                // .insert([{ cart_id: Cart.id, product_id, quantity }])
                .upsert([{ cart_id: Cart.id, product_id, quantity}])
                .select()
                .single();

            const existingCartItem = cart.find(item => item.product_id === product_id);
            if (existingCartItem) {
                toast.error('El producto ya está en el carrito');
                setLoading(false);
                set
                return;
            }


            if (error) {
                toast.error('No se pudo añadir al carrito');
                setLoading(false);
            } else {
                toast.success('Añadido al carrito');
                setCart(prevCart => [...prevCart, { ...Cart_item, Products: Product }]);
                // setCart(prevCart => {
                //     const updatedCart = prevCart.filter(item => item.product_id !== product_id);
                //     return [...updatedCart, { ...Cart_item, Products: Product }];
                // });
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


    const updateQuantity = (cartId, quantity) => {
        console.log(quantity);
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === cartId ? { ...item, quantity } : item
            )
        );
    };

    useEffect(() => {
        if (profile && profile.id) {
            getCartItems();
        }
    }, [profile]);

    return (
        <CartContext.Provider value={{ cart, loading, getCartItems, deleteCartItems, addCartItems, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;