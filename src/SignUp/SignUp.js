import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
    }

    const navigateSignIn = event => {
        navigate('/signin')
    }



    return (
        <div>

            <div className='w-50 mx-auto form p-4 mt-5'>
                <h2 className=' text-light'>Sign Up Now</h2>
                <div className='text-start'>
                    <form onSubmit={handleSignUp} className='text-start m-4'>

                        <div className="d-flex flex-column my-2">
                            <label htmlFor="email">Email</label>
                            <input ref={emailRef} type="text" placeholder='Enter your email' required />
                        </div>
                        <div className="d-flex flex-column my-">
                            <label htmlFor="password">Password</label>
                            <input ref={passwordRef} type="password" placeholder='Enter your password' required />
                        </div>
                        <button className='btn btn-success w-100 py-2 mt-4 fw-bold'>Sign Up</button>
                    </form>
                    <p className='test-start ms-4'>Already have a account? <Link to='/signin' className='text-danger pe-auto text-decoration-none' onClick={navigateSignIn}>Please Sign In.</Link></p>

                    <div>
                        <h6 className='text-center text-light'>or</h6>
                    </div>

                    <div className='mx-auto px-4'>
                        <button className='btn btn-success w-100 py-2  fw-bold'>Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;