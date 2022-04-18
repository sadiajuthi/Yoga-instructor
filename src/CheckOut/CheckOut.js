import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../image/6667718.jpg'

import './CheckOut.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const CheckOut = () => {

    const navigate = useNavigate();


    const handleProceed = () => {
        toast('order successful')
        navigate('/')

    }


    return (
        <div className='container mt-5 text-center'>
            <h3>Please check out to confirm your order!!!</h3>
            <div className="row">
                <div className="col-md-6">
                    <img className='w-100 mt-2' src={img} alt="" />
                </div>
                <div className="col-md-6 p-5">
                    <div className='checkout-form'>
                        <label className='d-block text-start' htmlFor="name">Name:</label>
                        <input className='w-100' type="text" name="name" id="" />
                        <label className='d-block text-start' htmlFor="">Phone Number:</label>
                        <input className='w-100' type="number" name="" id="" />
                        <label className='d-block text-start' htmlFor="name">Adress:</label>
                        <input className='w-100' type="text" name="name" id="" />
                        <label className='d-block text-start' htmlFor="">Want to say something:</label>
                        <textarea className='w-100 text-area' name="" id="" cols="20" rows="10"></textarea>
                    </div>
                </div>
                <div><button onClick={handleProceed} className='btn btn-success px-5'>Proceed CheckOut</button></div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;