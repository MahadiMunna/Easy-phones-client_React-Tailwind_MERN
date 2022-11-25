import React from 'react';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';
import img3 from '../../../assets/img3.jpg';

const Banner = () => {
    const bannerText = <>
        <h1 className="text-5xl font-extrabold text-white">Easy Phones!</h1>
        <p className="py-6 text-xl font-bold text-white">If you want to buy/sale your phone, this is the best site. Create an account, choice your phone and buy with your budget or post your phone for sell and sell in your best price.</p>
    </>
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div style={{ backgroundImage: `url(${img1})` }} className="hero min-h-screen bg-base-200">
                    <div className="hero-overlay bg-opacity-60 hero-content text-center ">
                        <div className="max-w-md">
                            {bannerText}
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div style={{ backgroundImage: `url(${img2})` }} className="hero min-h-screen bg-base-200">
                    <div className="hero-overlay bg-opacity-60 hero-content text-center ">
                        <div className="max-w-md">
                            {bannerText}
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div style={{ backgroundImage: `url(${img3})` }} className="hero min-h-screen bg-base-200">
                    <div className="hero-overlay bg-opacity-60 hero-content text-center ">
                        <div className="max-w-md">
                            {bannerText}
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;