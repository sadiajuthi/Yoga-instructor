import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {

    const handleProceed = () => {
        toast('order successful')
    }
    return (
        <div className='container mt-5 text-center'>
            <h3>Please check out to confirm your order!!!</h3>



            <button onClick={handleProceed} className='btn btn-success px-5 py-2 m-5'>Proceed CheckOut</button>
        </div>
    );
};

export default CheckOut;