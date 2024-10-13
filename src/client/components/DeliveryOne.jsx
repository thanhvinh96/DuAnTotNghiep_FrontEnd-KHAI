import React from 'react'
import { Link } from 'react-router-dom'

const DeliveryOne = () => {
    return (
        <div className="delivery-section">
            <div className="container container-lg">
                <div className="delivery position-relative rounded-16 bg-main-600 p-16 flex-align gap-16 flex-wrap z-1">
                    <img
                        src="assets/images/bg/delivery-bg.png"
                        alt=""
                        className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100"
                    />
                    <div className="flex-align flex-between">
                        <div className="text-center">
                            <h4 className="text-white mb-8">
                                We Delivery on Next Day from 10:00 AM to 08:00 PM
                            </h4>
                            <p className="text-white">For Orders starts from $100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DeliveryOne