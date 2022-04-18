import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import SocialSignin from '../SocialSigin/SocialSignin';
import './SignIn.css'
import { sendPasswordResetEmail } from 'firebase/auth';
import Loading from '../Loading/Loding';

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
    const loacation = useLocation();
    const from = loacation.state?.from?.pathname || '/home';


    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        return <Loading></Loading>
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    const handleSubmit = event => {

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
        console.log(email, password);

    }

    const navigateSignUp = event => {
        navigate('/signup')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(auth, email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
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
                {errorElement}

                <p className='ms-4 text-light'>New to Relaxia? <Link to='/signup' className='text-danger ms-2 pe-auto text-decoration-none' onClick={navigateSignUp}>Please Sign up.</Link></p>

                <p className='ms-4 text-light'>Forget Password? <button className='text-danger btn btn-link pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                <ToastContainer />

                <div>
                    <h6 className='text-center text-light'>or</h6>
                </div>
                <SocialSignin></SocialSignin>
            </div>
        </div>
    );
};

export default SignIn;