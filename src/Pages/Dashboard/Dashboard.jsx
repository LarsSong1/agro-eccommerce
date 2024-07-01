import React, { useContext, useEffect, useState } from 'react'
import { SaveIcon, TrashIcon } from '../../assets/content'
import CartContext from '../../context/CartContext'
import Input from '../../shared/Input'

function Dashboard() {
    const { orderData, deleteOrder, updateOrder } = useContext(CartContext)
    const [inputs, setInputs] = useState({})

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
    }, [orderData])

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

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-20 lg:w-[80%] w-[94%] " data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Pedidos de Clientes</h3>
                <p className="text-sm text-muted-foreground">Ve los detalles de los pedidos que han hecho tus clientes</p>
            </div>
            <div className="p-6">
                <div className="relative w-full lg:overflow-auto overflow-x-scroll">
                    <table className="lg:w-full w-[1000px] caption-bottom text-sm ">
                        <thead className="[&amp;_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                    Nombre del cliente
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
                                orderData.map(order => (
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" key={order.id}>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                            <div className="font-medium">
                                                <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                                    {order.Cart.profiles.full_name}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                            <Input
                                                className=''
                                                inputValue={inputs[order.id]?.deliveryMount || ''}
                                                onChange={(e) => handleInputChange(order.id, 'deliveryMount', e.target.value)}
                                            />
                                            <div className="flex flex-col w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                                {order.Cart?.Cart_items?.map(item => (
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
                                                inputValue={inputs[order.id]?.payedMount || ''}
                                                onChange={(e) => handleInputChange(order.id, 'payedMount', e.target.value)}
                                            />
                                        </td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                            <button
                                                onClick={() => handleSave(order.id)}
                                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                                                <SaveIcon />
                                                <span className="sr-only">Save</span>
                                            </button>
                                            <button
                                                onClick={() => deleteOrder(order.id)}
                                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                                                <TrashIcon />
                                            </button>
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
