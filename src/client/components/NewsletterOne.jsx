import React from 'react'

const NewsletterOne = () => {
    return (
        <div className="newsletter">
            <div className="container container-lg">
                <div className="newsletter-box position-relative rounded-16 flex-align gap-16 flex-wrap z-1">
                    <img
                        src="assets/images/bg/newsletter-bg.png"
                        alt=""
                        className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6"
                    />
                    <div className="row align-items-center">
                        <div className="col-xl-12">
                            <div className="">
                                <h1 className="text-white mb-12">
                                    Don't Miss Out on Grocery Deals
                                </h1>
                                <p className="text-white h5 mb-0">
                                    SING UP FOR THE UPDATE NEWSLETTER
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewsletterOne