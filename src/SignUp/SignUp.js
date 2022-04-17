
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
// import { createUserWithEmailAndPassword } from "firebase/auth"


const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        // user,
        // loading,
        // error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateSignIn = () => {
        navigate('/signin')
    }

    // if (user) {
    //     navigate('/home')
    // }



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
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        // await updateProfile({ displayName: name });
        // console.log('Updated profile');
        navigate('/home');
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