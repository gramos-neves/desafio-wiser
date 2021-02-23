import React, { useCallback, useEffect } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../hooks/ToastContext';
import { Toast } from './styles';


interface ToastProps {
    message: ToastMessage;
}


const Toasts: React.FC<ToastProps> = ({ message }) => {
    const { removeToast } = useToast();

    useEffect(() => {
        setTimeout(() => {
            removeToast(message.id);
        }, 3000)
    })

    const handleRemoveToast = useCallback((id: string) => {
        removeToast(id)
    }, [removeToast])

    return (
        <Toast
            key={message.id}
            type={message.type} >
            <FiAlertCircle />
            <div>
                <strong>{message.title}</strong>
                <p>{message.description}</p>
            </div>
            <button type="button" onClick={() => handleRemoveToast(message.id)}>
                <FiXCircle size={18} />
            </button>
        </Toast>
    )


}


export default Toasts