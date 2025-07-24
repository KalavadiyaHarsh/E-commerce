import React from 'react';
import TextField from '@mui/material/TextField';

const CheckOut = () => {
    return (
        <section className="py-10">
            <div className="container flex gap-5">
                {/* LEFT Column - Billing Form */}
                <div className="leftCol w-[70%]">
                    <div className="card bg-white shadow-md p-5 rounded-md w-full">
                        <h1 className="text-[20px] font-[600] mb-4">Billing Details</h1>

                        <form className="w-full mt-5">
                            {/* Full Name + Country */}
                            <div className="flex items-center gap-5 mb-5">
                                <div className="col w-[50%]">
                                    <TextField
                                        className="w-full"
                                        label="Full Name"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                                <div className="col w-[50%]">
                                    <TextField
                                        className="w-full"
                                        label="Country"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>

                            {/* Street Address */}
                            <div className="mb-5">
                                <h6 className="text-[14px] font-[500] mb-2">Street address *</h6>
                                <div className="mb-3">
                                    <TextField
                                        className="w-full"
                                        label="House number and street name"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        className="w-full"
                                        label="Apartment, suite, unit, etc. (optional)"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-5 mb-5">
                                <div className="w-[50%]">
                                    <h6 className="text-[14px] font-[500] mb-2">Town / City *</h6>
                                    <TextField
                                        className="w-full"
                                        label="City"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                                <div className="w-[50%]">
                                    <h6 className="text-[14px] font-[500] mb-2">State / County *</h6>
                                    <TextField
                                        className="w-full"
                                        label="State"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>

                            {/* ZIP Code */}
                            <div className="mb-5">
                                <h6 className="text-[14px] font-[500] mb-2">Postcode / ZIP *</h6>
                                <TextField
                                    className="w-full"
                                    label="ZIP Code"
                                    variant="outlined"
                                    size="small"
                                />
                            </div>

                            {/* Phone + Email */}
                            <div className="flex items-center gap-5 mb-5">
                                <div className="col w-[50%]">
                                    <TextField
                                        className="w-full"
                                        label="Phone Number"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                                <div className="col w-[50%]">
                                    <TextField
                                        className="w-full"
                                        label="Email Address"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* RIGHT Column - Order Summary */}
                <div className="rightCol w-[30%]">
                    <div className="card bg-white shadow-md p-5 rounded-md">
                        <h2 className="text-[16px] font-[600] mb-4">Your Order</h2>

                        {/* Header */}
                        <div className="flex justify-between font-[500] text-[14px] pb-2 border-b mb-3">
                            <span>Product</span>
                            <span>Subtotal</span>
                        </div>

                        {/* Product Item */}
                        <div className='scrol max-h-[250px] overflow-y-scroll overflow-x-hidden'>

                        <div className="flex justify-between items-start pb-3">
                            {/* Product Details */}
                            <div className="flex gap-3 items-start">
                                <img
                                    src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" // replace with your actual image path
                                    alt="A-Line Kurti"
                                    className="w-[70px] h-[80px] object-cover rounded hover:scale-105 transition-all cursor-pointer"
                                />
                                <div>
                                    <p className="text-[14px] font-medium">A-Line Kurti With Shrug</p>
                                    <p className="text-[13px] text-gray-500">Qty: 1</p>
                                </div>
                            </div>
                            {/* Price */}
                            <p className="text-[14px] font-medium">₹1,300.00</p>
                        </div>

                        <div className="flex justify-between items-start pb-3">
                            {/* Product Details */}
                            <div className="flex gap-3 items-start">
                                <img
                                    src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" // replace with your actual image path
                                    alt="A-Line Kurti"
                                    className="w-[70px] h-[80px] object-cover rounded hover:scale-105 transition-all cursor-pointer"
                                />
                                <div>
                                    <p className="text-[14px] font-medium">A-Line Kurti With Shrug</p>
                                    <p className="text-[13px] text-gray-500">Qty: 1</p>
                                </div>
                            </div>
                            {/* Price */}
                            <p className="text-[14px] font-medium">₹1,300.00</p>
                        </div>

                        <div className="flex justify-between items-start pb-3">
                            {/* Product Details */}
                            <div className="flex gap-3 items-start">
                                <img
                                    src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" // replace with your actual image path
                                    alt="A-Line Kurti"
                                    className="w-[70px] h-[80px] object-cover rounded hover:scale-105 transition-all cursor-pointer"
                                />
                                <div>
                                    <p className="text-[14px] font-medium">A-Line Kurti With Shrug</p>
                                    <p className="text-[13px] text-gray-500">Qty: 1</p>
                                </div>
                            </div>
                            {/* Price */}
                            <p className="text-[14px] font-medium">₹1,300.00</p>
                        </div>

                        <div className="flex justify-between items-start pb-3">
                            {/* Product Details */}
                            <div className="flex gap-3 items-start">
                                <img
                                    src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" // replace with your actual image path
                                    alt="A-Line Kurti"
                                    className="w-[70px] h-[80px] object-cover rounded hover:scale-105 transition-all cursor-pointer"
                                />
                                <div>
                                    <p className="text-[14px] font-medium">A-Line Kurti With Shrug</p>
                                    <p className="text-[13px] text-gray-500">Qty: 1</p>
                                </div>
                            </div>
                            {/* Price */}
                            <p className="text-[14px] font-medium">₹1,300.00</p>
                        </div>

                        <div className="flex justify-between items-start pb-3">
                            {/* Product Details */}
                            <div className="flex gap-3 items-start">
                                <img
                                    src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" // replace with your actual image path
                                    alt="A-Line Kurti"
                                    className="w-[70px] h-[80px] object-cover rounded hover:scale-105 transition-all cursor-pointer"
                                />
                                <div>
                                    <p className="text-[14px] font-medium">A-Line Kurti With Shrug</p>
                                    <p className="text-[13px] text-gray-500">Qty: 1</p>
                                </div>
                            </div>
                            {/* Price */}
                            <p className="text-[14px] font-medium">₹1,300.00</p>
                        </div>

                        <div className="flex justify-between items-start pb-3">
                            {/* Product Details */}
                            <div className="flex gap-3 items-start">
                                <img
                                    src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" // replace with your actual image path
                                    alt="A-Line Kurti"
                                    className="w-[70px] h-[80px] object-cover rounded hover:scale-105 transition-all cursor-pointer"
                                />
                                <div>
                                    <p className="text-[14px] font-medium">A-Line Kurti With Shrug</p>
                                    <p className="text-[13px] text-gray-500">Qty: 1</p>
                                </div>
                            </div>
                            {/* Price */}
                            <p className="text-[14px] font-medium">₹1,300.00</p>
                        </div>

                        </div>

                        {/* Repeat for another item if needed */}
                        {/* Subtotal */}
                        <div className="flex justify-between font-[500] text-[14px] pt-3 border-t mt-2">
                            <span>Subtotal</span>
                            <span>₹1,300.00</span>
                        </div>

                        {/* Checkout Button */}
                        <button className="btn-Org w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600">
                            Checkout
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CheckOut;
