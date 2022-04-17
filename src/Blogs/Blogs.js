import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className=''>
            <h2 className='mt-5 mb-4 text-success text-center'>Some Important Question About Firebase</h2>
            <div className="container text-start">
                <div className="card p-3 m-3 question-card">
                    <h5 className='mt-2'>(i) What is the difference between Authorization and Authentication?</h5>
                    <p className='fw-normal'>Answer: By authorization we can verify that which application accessed by a user. on the other hand authentication is the proccess that verify the identity of a user through email. </p>
                </div>
                <div className="card p-3 m-3 question-card">
                    <h5 className='mt-2'>(ii) Why are we using firebase? what are ather option do we have to implement authentication?</h5>
                    <p>Answer: Google Firebase is simple, user friendly and secured. it offers many features for web development. it removes the need to make databases ourself. By doing this, it reduces our time and workload.Though firebase is so usefull, there are some another option for authentication. Such as: Auth0, MongoDB, Passport, Okta etc. </p>
                </div>
                <div className="card p-3 m-3 question-card">
                    <h5 className='mt-2'>(iii) What other services does firebase provide except authentication?</h5>
                    <p>Answer: Besides authentication, Firebase provides many other services. Some are mentioned below:
                        <ul>
                            <li>Cloud Firestore.</li>
                            <li>Cloud Functions.</li>
                            <li>Hosting.</li>
                            <li>Cloud Storage.</li>
                            <li>Google Analytics.</li>
                            <li>Predictions.</li>
                            <li>Cloud Messaging.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;