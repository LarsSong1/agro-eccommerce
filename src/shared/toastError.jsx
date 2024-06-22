import { useEffect } from 'react'
import { toast } from 'sonner'

const ToastError = ({ message }) => {
    if (message) {
        return toast.error('error')
    }



}

export default ToastError