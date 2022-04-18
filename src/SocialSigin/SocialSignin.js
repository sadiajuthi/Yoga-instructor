import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const SocialSignin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div className='mx-auto px-4'>

            <button onClick={() => signInWithGoogle()} className='btn btn-success w-100 py-2  fw-bold'>Sign In With Google</button>
            {errorElement}
        </div>
    );
};

export default SocialSignin;