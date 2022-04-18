import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../hooks/useService';
import './Services.css'

const Services = () => {
    const [services, setServices] = useServices()
    const navigate = useNavigate();
    const handlecheckout = () => {
        navigate('/checkout')
    }

    return (
        <div>
            <h1 id='service' className='text-success text-center mt-5 pt-5 mb-3'>Services That You Can Choose</h1>
            <div className='row mb-5'>
                {
                    services.map(service =>
                        <div className='col-md-4 col-sm-12 p-2'>
                            <div className="card s-card p-3 text-start my-2">
                                <div className='d-flex'>
                                    <img className='img-fulid rounded w-50' src={service.img} alt="" />
                                    <div className='p-3'>
                                        <h4>{service.name}</h4>
                                        <h6>${service.price} <small className='mute'>per month</small></h6>
                                    </div>
                                </div>
                                <p className='mt-2'>{service.description}</p>
                                <button onClick={handlecheckout} className='btn btn-lg btn-success'>Order Now</button>
                            </div>

                        </div>

                    )
                }

            </div>
        </div>
    );
};

export default Services;