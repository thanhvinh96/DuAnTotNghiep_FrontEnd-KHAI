import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductController } from '../../controller/productController.tsx';

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const ProductListOne = () => {
    const [newproduct, setnewproduct] = useState([]);
    useEffect(() => {
        const newData = async () => {
            try {
                const data = await ProductController.fetchProducts();
                if (data != null) {
                    setnewproduct(data);
                    console.log(data);
                } else {
                    console.log('No data');
                }
            } catch (error) {
                console.error("Failed to fetch Category:", error);
            }
        };
        newData();
    }, []);
    return (
        <>
            <hr />
            <h5>Tất cả sản phẩm</h5>
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
                                    <div key={item.ProductID} className="col-xxl-2 col-lg-3 col-sm-4 col-6 d-flex gap-16">
                                        <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                            <Link
                                                to="/product-details"
                                                className="product-card__thumb flex-center"
                                            >
                                                <img src={item.OtherImages[0]} alt="" />
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
                                                            {formatCurrency(item.Price)}
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
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductListOne;
