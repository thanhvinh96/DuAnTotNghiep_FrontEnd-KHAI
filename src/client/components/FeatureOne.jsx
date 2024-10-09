import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { getCountdown } from '../helper/Countdown';
import { CategoryController } from '../../controller/categoryController.tsx';
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            type="button" onClick={onClick}
            className={` ${className} slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
        >
            <i className="ph ph-caret-right" />
        </button>
    );
}
function SamplePrevArrow(props) {
    const { className, onClick } = props;

    return (

        <button
            type="button"
            onClick={onClick}
            className={`${className} slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
        >
            <i className="ph ph-caret-left" />
        </button>
    );
}
const FeatureOne = () => {
    const [timeLeft, setTimeLeft] = useState(getCountdown());
    const [datacategory, setdatacategory] = useState([]);

    useEffect(() => {
        const newData = async () => {
            try {
                const data = await CategoryController.fetchCategories();
                if (data != null) {
                    setdatacategory(data);
                } else {
                    console.error('No data received');
                }
            } catch (error) {
                console.error("Failed to fetch Category:", error);
            }
        };
        newData();
        const interval = setInterval(() => {
            setTimeLeft(getCountdown());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 10,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1699,
                settings: {
                    slidesToShow: 9,
                },
            },
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 8,
                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 359,
                settings: {
                    slidesToShow: 1,
                },
            },

        ],
    };
    // catalory.
    return (
        <div className="feature" id="featureSection">
            <div className="container container-lg">
                <div className="position-relative arrow-center">
                    <div className="flex-align">
                        <button
                            type="button"
                            id="feature-item-wrapper-prev"
                            className="slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
                        >
                            <i className="ph ph-caret-left" />
                        </button>
                        <button
                            type="button"
                            id="feature-item-wrapper-next"
                            className="slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
                        >
                            <i className="ph ph-caret-right" />
                        </button>
                    </div>
                    <div className="feature-item-wrapper">
                        <Slider {...settings}>
                            {datacategory.map((cate) => (
                                <div key={cate.CategoryID} className="feature-item text-center">
                                    <div className="feature-item__thumb rounded-circle">
                                        <Link to="/shop" className="w-100 h-100 flex-center">
                                            <img src={cate.ImageURL} alt="" style={{width:'106px',height:'106px',borderRadius:'100%'}} />
                                        </Link>
                                    </div>
                                    <div className="feature-item__content mt-16">
                                        <h6 className="text-lg mb-8">
                                            <Link to="/shop" className="text-inherit">
                                                {cate.CategoryName}
                                            </Link>
                                        </h6>
                                        <span className="text-sm text-gray-400">{cate.status}</span>
                                    </div>
                                </div>
                            ))}
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img4.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                            Drinks &amp; Juice
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img5.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                            Animals Food
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img6.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                            Fresh Fruits
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img7.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                            Yummy Candy
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img2.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                            Fish &amp; Meats
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img8.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                            Dairy &amp; Eggs
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img9.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                            Snacks
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="assets/images/thumbs/feature-img10.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                            Frozen Foods
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FeatureOne