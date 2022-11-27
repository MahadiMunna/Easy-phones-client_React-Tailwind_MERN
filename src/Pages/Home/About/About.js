import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/img.jpg'

const About = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={img} className="sm:w-sm md:w-md lg:w-xl mask mask-hexagon-2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">About Easy Phones!</h1>
                    <p className="py-6">You are always welcome to Easy Phones. Here you will able to find second hand phones and you can also sell your old phone from our website. We achieve the trust of people since we started. This is the best place for sell and buy old phones.</p>
                    <button className="btn btn-outline btn-primary"><Link to='/products'>See our products</Link></button>
                </div>
            </div>
        </div>
    );
};

export default About;