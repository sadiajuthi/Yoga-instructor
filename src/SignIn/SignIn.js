import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import SocialSignin from '../SocialSigin/SocialSignin';
import './SignIn.css'

const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleSubmit = event => {

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        event.preventDefault();
        console.log(email, password)
        navigate('/home');
    }

    const navigateSignUp = event => {
        navigate('/signup')
    }

    return (
        <div className='w-50 mx-auto form p-5 mt-5'>
            <h2 className=' text-light'>Please Sign In</h2>
            <div className='text-start'>
                <form onSubmit={handleSubmit} className='text-start m-4'>

                    <div className="d-flex flex-column my-2">
                        <label htmlFor="email">Email</label>
                        <input ref={emailRef} type="text" placeholder='Enter your email' required />
                    </div>
                    <div className="d-flex flex-column my-">
                        <label htmlFor="password">Password</label>
                        <input ref={passwordRef} type="password" placeholder='Enter your password' required />
                    </div>
                    <button className='btn btn-success w-100 py-2 mt-4 mb-1 fw-bold'>Sign In</button>
                </form>

                <p className='ms-4 text-light'>New to Relaxia? <Link to='/signup' className='text-danger pe-auto text-decoration-none' onClick={navigateSignUp}>Please Sign up.</Link></p>

                <div>
                    <h6 className='text-center text-light'>or</h6>
                </div>
                <SocialSignin></SocialSignin>
            </div>
        </div>
    );
};

export default SignIn;