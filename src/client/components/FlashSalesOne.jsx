import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getCountdown } from '../helper/Countdown';
import { ProductController } from '../../controller/productController.tsx';


const SampleNextArrow = memo(function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            type="button"
            onClick={onClick}
            className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
        >
            <i className="ph ph-caret-right" />
        </button>
    );
});

const SamplePrevArrow = memo(function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
        >
            <i className="ph ph-caret-left" />
        </button>
    );
});

const FlashSalesOne = () => {
    const [timeLeft, setTimeLeft] = useState(getCountdown());
    const [newproduct, setnewproduct] = useState([]);
    useEffect(() => {
        const newData = async () => {
            try {
                const data = await ProductController.getNewProduct();
                if (data != null) {
                    setnewproduct(data);
                } else {
                    console.log('No data');
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
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,

                },
            },

        ],
    };
    return (
        <>
            <section className="flash-sales pt-80">
                <div className="container container-lg">
                    <div className="section-heading">
                        <div className="flex-between flex-wrap gap-8">
                            <h5 className="mb-0">NEW PRODUCT</h5>
                        </div>
                    </div>
                    <div className="flash-sales__slider arrow-style-two">
                        <Slider {...settings}>
                            {newproduct.map((item) => (
                                <div>
                                    <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                                        <img
                                            src="assets/images/bg/flash-sale-bg2.png"
                                            alt=""
                                            className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                                        />
                                        <div className="flash-sales-item__thumb d-sm-block d-none">
                                            <img src={item.Image} alt="" />
                                        </div>
                                        <div className="flash-sales-item__content ms-sm-auto">
                                            <h6 className="text-32 mb-20">{item.ProductName}</h6>
                                            <div className="countdown" id="countdown2">
                                                <ul className="countdown-list flex-align flex-wrap">
                                                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                        <span className="days" />
                                                        {timeLeft.days}  Days
                                                    </li>
                                                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                        <span className="hours" />
                                                        {timeLeft.hours}  Hours
                                                    </li>
                                                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                        <span className="minutes" />
                                                        {timeLeft.minutes}  Min
                                                    </li>
                                                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                        <span className="seconds" />
                                                        {timeLeft.seconds}  Sec
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div>
                                <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                                    <img
                                        src="assets/images/bg/flash-sale-bg2.png"
                                        alt=""
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                                    />
                                    <div className="flash-sales-item__thumb d-sm-block d-none">
                                        <img src="assets/images/thumbs/flash-sale-img2.png" alt="" />
                                    </div>
                                    <div className="flash-sales-item__content ms-sm-auto">
                                        <h6 className="text-32 mb-20">vinh</h6>
                                        <div className="countdown" id="countdown2">
                                            <ul className="countdown-list flex-align flex-wrap">
                                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                    <span className="days" />
                                                    {timeLeft.days}  Days
                                                </li>
                                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                    <span className="hours" />
                                                    {timeLeft.hours}  Hours
                                                </li>
                                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                    <span className="minutes" />
                                                    {timeLeft.minutes}  Min
                                                </li>
                                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                    <span className="seconds" />
                                                    {timeLeft.seconds}  Sec
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                                    <img
                                        src="assets/images/bg/flash-sale-bg2.png"
                                        alt=""
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                                    />
                                    <div className="flash-sales-item__thumb d-sm-block d-none">
                                        <img src="assets/images/thumbs/flash-sale-img2.png" alt="" />
                                    </div>
                                    <div className="flash-sales-item__content ms-sm-auto">
                                        <h6 className="text-32 mb-20">vinh</h6>
                                        <div className="countdown" id="countdown2">
                                            <ul className="countdown-list flex-align flex-wrap">
                                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                    <span className="days" />
                                                    {timeLeft.days}  Days
                                                </li>
                                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                    <span className="hours" />
                                                    {timeLeft.hours}  Hours
                                                </li>
                                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                    <span className="minutes" />
                                                    {timeLeft.minutes}  Min
                                                </li>
                                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                    <span className="seconds" />
                                                    {timeLeft.seconds}  Sec
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <hr />
            <section className="recommended">
                <div className="container container-lg">
                    <div className="tab-content" id="pills-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="pills-all"
                            role="tabpanel"
                            aria-labelledby="pills-all-tab"
                            tabIndex={0}
                        >
                            <div className="row g-12">
                                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                    {newproduct.map(((item) =>
                                        <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                            <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                                New
                                            </span>
                                            <Link
                                                to="/product-details"
                                                className="product-card__thumb flex-center"
                                            >
                                                <img src={item.Image} alt="" />
                                            </Link>
                                            <div className="product-card__content p-sm-2">
                                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                                    <Link to="/product-details" className="link text-line-2">
                                                        {item.ProductName}
                                                    </Link>
                                                </h6>
                                                <div className="flex-align gap-4">
                                                    <span className="text-main-600 text-md d-flex">
                                                        <i className="ph-fill ph-storefront" />
                                                    </span>
                                                    <span className="text-gray-500 text-xs">
                                                        By FOOD STORE
                                                    </span>
                                                </div>
                                                <div className="product-card__content mt-12">
                                                    <div className="product-card__price mb-8">
                                                        <span className="text-heading text-md fw-semibold ">
                                                            {item.Price}
                                                            <span className="text-gray-500 fw-normal">VNĐ</span>{" "}
                                                        </span>
                                                    </div>
                                                    <div className="flex-align gap-6">
                                                        <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                        <span className="text-15 fw-bold text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                                    </div>
                                                    <Link
                                                        to="/cart"
                                                        className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                                    >
                                                        Add To Cart <i className="ph ph-shopping-cart" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">

                                    <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                        <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                            New
                                        </span>
                                        <Link
                                            to="/product-details"
                                            className="product-card__thumb flex-center"
                                        >
                                            <img src="assets/images/thumbs/product-img18.png" alt="" />
                                        </Link>
                                        <div className="product-card__content p-sm-2">
                                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                                <Link to="/product-details" className="link text-line-2">
                                                    Tropicana 100% Juice, Orange, No Pulp
                                                </Link>
                                            </h6>
                                            <div className="flex-align gap-4">
                                                <span className="text-main-600 text-md d-flex">
                                                    <i className="ph-fill ph-storefront" />
                                                </span>
                                                <span className="text-gray-500 text-xs">
                                                    By Lucky Supermarket
                                                </span>
                                            </div>
                                            <div className="product-card__content mt-12">
                                                <div className="product-card__price mb-8">
                                                    <span className="text-heading text-md fw-semibold ">
                                                        $14.99{" "}
                                                        <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                    </span>
                                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                        $28.99
                                                    </span>
                                                </div>
                                                <div className="flex-align gap-6">
                                                    <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                                        <i className="ph-fill ph-star" />
                                                    </span>
                                                    <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                                </div>
                                                <Link
                                                    to="/cart"
                                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                                >
                                                    Add To Cart <i className="ph ph-shopping-cart" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>

    )
}

export default FlashSalesOne