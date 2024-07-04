import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { toast } from "sonner";
import AuthContext from "./AutContext";




const CartContext = createContext({
    cart: [],
    loading: false,
    order: [],
    orderData: [],
    getCartItems: () => { },
    addCartItems: () => { },
    deleteCartItems: () => { },
    addOrder: () => { },
    deleteOrder: () => { },
    updateOrder: () => { }
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([]);
    const [orderData, setOrderData] = useState([]);
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
                .upsert([{ cart_id: Cart.id, product_id, quantity }])
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
        // console.log(quantity);
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === cartId ? { ...item, quantity } : item
            )
        );
    };



    const addOrder = async (orderData) => {
        const { cart_id, delivery_mount, total_mount, payed_mount } = orderData;
        try {
            const { data: Orders, error } = await supabase
                .from('Orders')
                .insert([{ cart_id, delivery_mount, total_mount, payed_mount }]) // Usar insert en lugar de upsert para nuevos registros
                .select()
                .single();


            const orderDetails = cart.map(item => ({
                order_id: Orders.id,  // Referencia a la orden recién creada
                product_id: item.product_id,
                quantity: item.quantity,
                price: item.Products.price,
                total: item.Products.price * item.quantity
            }));

      

            const { data: orderDetailsData, error: orderDetailsError } = await supabase
                .from('orders_details')
                .insert(orderDetails)
                .select()

            if (orderDetailsError) {
                toast.error('Error al crear los detalles de la orden');
                console.error('Order details creation error:', orderDetailsError);
                return;
            }


            if (error) {
                toast.error('No se pudo procesar el pedido');
                console.error('Error details:', error);
            } else {
                setOrder(prevOrders => [...prevOrders, Orders]);
                toast.success('Orden enviada');
            }
        } catch (err) {
            toast.error('Error al procesar el pedido');
            console.error('Catch error details:', err);
        }
    };


    const deleteOrder = async (orderId) => {
        try {
            const { error } = await supabase
                .from('Orders')
                .delete()
                .eq('id', orderId);

            if (error) {
                toast.error('No se pudo eliminar la orden');
            } else {
                setOrder(prevOrders => prevOrders.filter(order => order.id !== orderId));
                toast.success('Orden eliminada');
            }
        } catch (err) {
            toast.error('Error al eliminar la orden');
            console.error(err);
        }
    };

    const updateOrder = async (orderId, updateData) => {
        try {
            const { data: updatedOrder, error } = await supabase
                .from('Orders')
                .update(updateData)
                .eq('id', orderId)
                .select()
                .single();

            if (error) {
                toast.error('No se pudo actualizar la orden');
            } else {
                setOrder(prevOrders => prevOrders.map(order => order.id === orderId ? updatedOrder : order));
                toast.success('Orden actualizada');
            }
        } catch (err) {
            toast.error('Error al actualizar la orden');
            console.error(err);
        }
    };

    const getOrders = async () => {
        let { data: DataOrders, error } = await supabase
            .from('Orders')
            .select(`
                *,
                Cart(
                    *,
                    Cart_items(
                        *,
                        Products(
                            *,
                            Category(name)
                        )
                    ),
                    profiles(*)
                ),
                orders_details(*,
                    Products(*)
                )
            `)

        if (error) {
            toast.error('Error')
        } else {
            setOrderData(DataOrders)
        }

    }

    


    useEffect(() => {
        if (profile && profile.id) {
            getCartItems();
        }

        if (orderData) {
            getOrders();
        }

    }, [profile, order]);

    return (
        <CartContext.Provider value={{ cart, loading, getCartItems, deleteCartItems, addCartItems, updateQuantity, addOrder, deleteOrder, updateOrder, orderData }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;