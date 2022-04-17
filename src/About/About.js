import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div className="row intro mt-5 w-75 mx-auto mb-3">
                <div className="col-md-6 mt-5 ps-5">
                    <h2 className='mt-5 pt-4'>Myself</h2>
                    <h1>Sadia Afrin Juthi</h1>
                </div>
                <div className="col-md-6 p-4 mb-5">
                    <h4>A short description about my goal:</h4>
                    <p>I have completed my MSC in Mathematics. Though I am a non CSE person but in last few years I feel my passion in web development. Now my goal is to become a successfull web developer. for this purpose I joined in Programming Hero With Jhangkar Mahmub Course. It makes me so happy when I learn code. I never feel this hppiness in other works. thats why I choose it. I know I just learn maximum 40% of programming. but I beleive that Programming Hero Team help me to achieve my Goal. </p>
                </div>
            </div>
        </div>
    );
};

export default About;