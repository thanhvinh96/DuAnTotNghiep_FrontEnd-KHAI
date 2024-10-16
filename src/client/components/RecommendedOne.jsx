import React from 'react'
import { Link } from 'react-router-dom'

const RecommendedOne = () => {
    return (
        <section className="recommended">
            <div className="container container-lg">
                <h5 className="mb-0">Recommended for you</h5> <br />
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
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img8.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Marcel's Modern Pantry Almond Unsweetened
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
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img9.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                O Organics Milk, Whole, Vitamin D
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
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img10.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Whole Grains and Seeds Organic Bread
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
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img12.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Nature Valley Whole Grain Oats and Honey Protein
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
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img14.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
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
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img15.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
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
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img16.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
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
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img17.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
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

    )
}

export default RecommendedOne