import React, { useContext, useEffect, useState } from 'react'
import { SaveIcon, TrashIcon } from '../../assets/content'
import CartContext from '../../context/CartContext'
import Input from '../../shared/Input'
import InputSearch from '../../shared/inputSearch'
import { BsWhatsapp } from 'react-icons/bs'
import { BiSend } from 'react-icons/bi'

function Dashboard() {
    const { orderData, deleteOrder, updateOrder } = useContext(CartContext)
    const [inputs, setInputs] = useState({})
    const [search, setSearch] = useState('')
    const [filterOrder, setFilterOrder] = useState([])

    useEffect(() => {
        if (orderData) {
            const initialInputs = {}
            orderData.forEach(order => {
                initialInputs[order.id] = {
                    deliveryMount: order.delivery_mount || 0,
                    payedMount: order.payed_mount || 0
                }
            })
            setInputs(initialInputs)
        }

        let filterForOrders = orderData
        if (search) {
            filterForOrders = filterForOrders.filter(data =>
                data.Cart.profiles.full_name.toLowerCase().includes(search.toLowerCase())
            )
        }

        setFilterOrder(filterForOrders)
    }, [orderData, search, orderData])

    const handleInputChange = (id, field, value) => {
        setInputs(prevState => ({
            ...prevState,
            [id]: {
                ...prevState[id],
                [field]: value
            }
        }))
    }

    const handleSave = (id) => {
        const data = {
            delivery_mount: inputs[id]?.deliveryMount,
            payed_mount: inputs[id]?.payedMount
        }
        updateOrder(id, data)
    }

    if (!orderData) {
        return <div className='h-screen'>No hay Ordenes</div>
    }

    const formatOrderMessage = (order, mountDelivery) => {
        let message = `Hola has hecho un pedido recientemente en Agromatics y esto es lo que has pedido:\n`;
        order.orders_details.forEach(item => {
            message += `${item.quantity} ${item.Products?.name}: $${item.Products?.price}\n`;
        });
        message += `Total: $${Number(order.total_mount) + Number(order.delivery_mount) + Number(mountDelivery)}\n`;
        message += `Aceptamos los siguientes Metodos de pago:\nBanco Pichincha: xxxxxxxxxxxx \nBanco Pacifico: xxxxxxxxxxxxxx \nRecuerda enviarnos el comprobante al presente numero`
        return encodeURIComponent(message); // Asegúrate de que el mensaje esté correctamente codificado
    };


    console.log(orderData)
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-20 lg:w-[80%] w-[94%] " data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Pedidos de Clientes</h3>
                <p className="text-sm text-muted-foreground">Ve los detalles de los pedidos que han hecho tus clientes</p>
            </div>
            <div className="p-6">
                <InputSearch onChange={(e) => setSearch(e.target.value)} placeholderContent='Buscar Nombre' />
                <div className="relative w-full lg:overflow-auto overflow-x-scroll">
                    <table className="lg:w-full w-[1000px] caption-bottom text-sm ">
                        <thead className="[&amp;_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                    Nombre del cliente
                                </th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                    Número
                                </th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                    Producto y Delivery
                                </th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                    Monto Total
                                </th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                    Monto Pagado
                                </th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="[&amp;_tr:last-child]:border-0">
                            {
                                filterOrder.map(order => (
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" key={order.id}>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                            <div className="font-medium">
                                                <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                                    {order.Cart.profiles.full_name}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                            <div className="font-medium">
                                                <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                                    {order.Cart.profiles.phone}
                                                </div>

                                                <a href={`https://wa.me/${order.Cart.profiles.phone}?text=Hola%20quiero%20hablar%20contigo`} className='w-full bg-green-600 py-2 rounded-md flex items-center justify-center mt-2'>
                                                    <BsWhatsapp color='white' />

                                                </a>
                                            </div>
                                        </td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                            <Input
                                                className=''
                                                placeholder='Delivery: $'
                                                inputValue={inputs[order.id]?.deliveryMount || ''}
                                                onChange={(e) => handleInputChange(order.id, 'deliveryMount', e.target.value)}
                                            />
                                            <div className="flex flex-col w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                                {order?.orders_details.map(item => (
                                                    <div className='flex justify-between' key={item.id}>
                                                        <p className='font-bold'>{item.quantity} {item.Products?.name}:</p> <p className=''>${item.Products?.price}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                            <div
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                                <p>
                                                    ${Number(order.total_mount) + Number(order.delivery_mount)}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                            <Input
                                                className=''
                                                placeholder='Monto Pagado: $'
                                                inputValue={inputs[order.id]?.payedMount || ''}
                                                onChange={(e) => handleInputChange(order.id, 'payedMount', e.target.value)}
                                            />
                                        </td>
                                        <td className=" align-middle [&amp;:has([role=checkbox])]:pr-0 mx-auto">
                                            <div>
                                                <button
                                                    onClick={() => handleSave(order.id)}
                                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                                                    <SaveIcon />
                                                    <span className="sr-only">Save</span>
                                                </button>
                                                <button
                                                    onClick={() => deleteOrder(order.id)}
                                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-red-400 hover:text-black h-10 w-10">
                                                    <TrashIcon />
                                                </button>
                                                <a
                                                    href={`https://wa.me/${order.Cart.profiles.phone}?text=${formatOrderMessage(order, order.delivery_mount)}`}
                                                    className="inline-flex items-center mx-auto justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-green-400 hover:text-accent-foreground h-10 w-10"
                                                >
                                                    <BiSend className='-rotate-45' />
                                                </a>

                                            </div>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
