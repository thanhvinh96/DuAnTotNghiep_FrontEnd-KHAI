import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getCountdown } from '../helper/Countdown';
import { ProductController } from '../../controller/productController.tsx';


const SampleNextArrow = memo(function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            type="button" onClick={onClick}
            className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
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
            className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
        >
            <i className="ph ph-caret-left" />
        </button>
    );
});

const DealsCategory = () => {
    const [timeLeft, setTimeLeft] = useState(getCountdown());
    const [dataproductnew,setdataproductnew] = useState([]);
    const dataProductNew = async () => {
        try {
            const data = await ProductController.getProductCategory();
            console.log('Giá trị data:', JSON.stringify(data, null, 2));
             setdataproductnew(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
            // Có thể set một trạng thái lỗi hoặc thông báo cho người dùng biết về sự cố
        }
    };
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND'
        }).format(amount);
      };
    useEffect(() => {
        dataProductNew();
        // console.log("GIÁ TRỊ"+dataproductnew.)
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
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 5,

                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,

                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,

                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,

                },
            },

        ],
    };
    return (
        <>
        {dataproductnew.map((category) => (
            category.Products.length > 0 && ( // Chỉ hiển thị nếu có sản phẩm
                <section className="deals-weeek pt-80" key={category.CategoryID}>
                    <div className="container container-lg">
                        <div className="border border-gray-100 p-24 rounded-16">
                            <div className="section-heading mb-24">
                                <div className="flex-between flex-wrap gap-8">
                                    <h5 className="mb-0">{category.CategoryName}</h5>
                                    <div className="flex-align mr-point gap-16">
                                        <Link
                                            to="/shop"
                                            className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                                        >
                                            View All Deals
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="deals-week-slider arrow-style-two">
                                <Slider {...settings}>
                                    {category.Products.map((product) => (
                                        <div key={product.ProductID}>
                                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                                <Link
                                                    to={`/product-details?id=${product.ProductID}`}
                                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                                >
                                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                                    {category.CategoryName}
                                                    </span>
                                                    <img
                                                        src={`http://localhost:3000/uploads/${product.OtherImages[0]}`} // Cập nhật với URL ảnh đúng của sản phẩm
                                                        alt={product.ProductName}
                                                        className="w-auto max-w-unset"
                                                    />
                                                </Link>
                                                <div className="product-card__content mt-16">
                                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                                        <Link
                                                            to={`/product-details?id=${product.ProductID}`}
                                                            className="link text-line-2"
                                                            tabIndex={0}
                                                        >
                                                            {product.ProductName}
                                                        </Link>
                                                    </h6>
                                                    <div className="flex-align gap-4">
                                                        <span className="text-tertiary-600 text-md d-flex">
                                                            <i className="ph-fill ph-storefront" />
                                                        </span>
                                                        <span className="text-gray-500 text-xs">
                                                            By Admin
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
                                                            Số Lượng {product.StockQuantity}
                                                        </span>
                                                    </div>
                                                    <div className="product-card__price my-20">
                                                        <h6 className="mb-0">{formatCurrency(product.ProductPrice)}</h6>
                                                    </div>

                                                    <Link
                                                        to="/cart"
                                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                                        tabIndex={0}
                                                    >
                                                        Mua Sản Phẩm <i className="ph ph-shopping-cart" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            )
        ))}
    </>

    )
}

export default DealsCategory