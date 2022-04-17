import React from 'react';
import img from '../image/banner.jpg'
import './Home.css'
import useServices from '../hooks/useService'





const Home = () => {
    const [services, setServices] = useServices()

    return (
        <div>
            <img className='w-100 h-50 banner mb-5' src={img} alt="" />
            <div className="title">
                <h1>Let's Get <br /> The <br /> Balance Of <br /> Living.</h1>
                <button className='btn bt-lg btn-success px-4 py-2'>Discover More</button>
            </div>
            <section id="service" className='container'>
                <h1 className='text-success text-center mt-5 mb-5'>My Services That You Can Choose</h1>
                <div className='row mb-5'>
                    {
                        services.map(service =>
                            <div className='col-md-4 col-sm-12 p-2'>
                                <div className="row">
                                    <div className="col-md-11 border shadow p-3">
                                        <img className='w-100' src={service.img} alt="" />
                                        <div className="text-start my-2">
                                            <h4>{service.name}</h4>
                                            <h5>Price: ${service.price}</h5>
                                            <p>{service.description}</p>
                                            <button className='btn btn-lg btn-success'>Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }

                </div>

            </section>


        </div>
    );
};

export default Home;