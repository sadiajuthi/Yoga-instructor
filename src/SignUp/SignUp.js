
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import SocialSignin from '../SocialSigin/SocialSignin';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import { createUserWithEmailAndPassword } from "firebase/auth"


const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateSignIn = () => {
        navigate('/signin')
    }


    // const handleSignUp = event => {
    //     const email = event.target.email.value
    //     const password = event.target.password.value;
    //     createUserWithEmailAndPassword( auth,email, password)
    //     .then(result => {
    //         const user = result.user;
    //         console.log(user);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })

    //     console.log('submitted', email, password);
    //     event.preventDefault();

    // }
    const handleSignUp = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        navigate('/home')

    }




    return (
        <div>

            <div className='w-50 mx-auto form p-4 mt-5'>
                <h2 className=' text-light'>Sign Up Now</h2>
                <div className='text-start'>
                    <form onSubmit={handleSignUp} className='text-start m-4'>
                        <div className="d-flex flex-column my-2">
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' placeholder='Eter your Name' id="" />
                        </div>
                        <div className="d-flex flex-column my-2">
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' placeholder='Enter your email' required />
                        </div>
                        <div className="d-flex flex-column my-">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder='Enter your password' required />
                        </div>
                        <div >
                            <input className='btn btn-success w-100 py-2 mt-4 fw-bold' type="submit" value="signup" />
                        </div>
                    </form>
                    <p className='test-start ms-4 text-light'>Already have a account? <Link to='/signin' className='text-danger pe-auto text-decoration-none' onClick={navigateSignIn}>Please Sign In.</Link></p>

                    <div>
                        <h6 className='text-center text-light'>or</h6>
                    </div>

                    <SocialSignin></SocialSignin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;