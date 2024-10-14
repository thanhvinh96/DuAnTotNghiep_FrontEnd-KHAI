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

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const FlashSalesOne = () => {
    const [timeLeft, setTimeLeft] = useState(getCountdown());
    const [newproduct, setnewproduct] = useState([]);
    useEffect(() => {
        const newData = async () => {
            try {
                const data = await ProductController.getProductNew();
                if (data != null) {
                    setnewproduct(data.data);
                    console.log('vinh', data.data);

                } else {
                    console.log('No data');
                }
            } catch (error) {
                console.error("Failed to fetch product:", error);
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
                                        <h6 className="text-20" style={{ marginTop: '-20px' }}>{item.ProductName}</h6>
                                        <div className="flash-sales-item__thumb d-flex">
                                            <img src={item.OtherImages[0]} alt="" style={{ width: '200px', height: '150px' }} />
                                            <img src={item.OtherImages[1]} alt="" style={{ width: '200px', height: '150px' }} />
                                            <img src={item.OtherImages[2]} alt="" style={{ width: '200px', height: '150px' }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                {newproduct.map(((item) =>
                                    <div className="col-xxl-2 gap-16 d-flex">
                                        <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                            <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                                New
                                            </span>
                                            <Link
                                                to={`/product-details?id=${item.ProductID}`}
                                                className="product-card__thumb flex-center"
                                            >
                                                <img src={item.OtherImages[0]} alt="" />
                                            </Link>
                                            <div className="product-card__content p-sm-2">
                                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                                    <Link to={`/product-details?id=${item.ProductID}`} className="link text-line-2">
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
                                                <div className="mt-8">
                                                    <div
                                                        className="progress w-100 bg-color-three rounded-pill h-4"
                                                        role="progressbar"
                                                        aria-label="Basic example"
                                                        aria-valuenow={35}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        <div
                                                            className="progress-bar bg-tertiary-600 rounded-pill"
                                                            style={{ width: "35%" }}
                                                        />
                                                    </div>
                                                    <span className="text-gray-900 text-xs fw-medium mt-8">
                                                        Số Lượng {item.StockQuantity}
                                                    </span>
                                                </div>
                                                <div className="product-card__content mt-12">
                                                    <div className="product-card__price my-20">
                                                        <h6 className=" mb-0">{formatCurrency(item.Price)}/kg</h6>
                                                    </div>
                                                    <Link
                                                        to={`/product-details?id=${item.ProductID}`}

                                                    >
                                                        <button className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center" >
                                                            Xem chi tiết <i className="ph ph-shopping-cart" />
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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