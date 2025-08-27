import React from 'react';
import { Link } from 'react-router-dom';

const BannerBox = (props) => {  
    return (
        <div className="bannerBox relative overflow-hidden rounded-lg border border-gray-300 shadow-md group">
            {/* Image */}
            <Link to={props.link || "/"}>
                <img 
                    src={props.img} 
                    alt="" 
                    className="w-full h-[200px] object-cover transition-all duration-200 group-hover:scale-105 group-hover:rotate-1" 
                />
            </Link>

            {/* Overlay Info */}
            <div 
                className={`
                    absolute top-0 
                    ${props.info === "left" ? "left-5" : "right-5"} 
                    w-[70%] h-[100%] 
                    flex flex-col justify-center gap-2 z-50
                  
                `}
            >
                <h2 className="text-[18px] font-[600] text-gray-800">
                    {props?.item?.bannerTitle || "Sample Product"}
                </h2>
                <span className="text-[20px] text-primary font-[600]">
                    &#x20b9;{props?.item?.price || "$129.00"}
                </span>
                <div>
                    <Link 
                        to={props.link || "/"} 
                        className="text-[16px] font-[600] bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
                    >
                        {props.buttonText || "SHOP NOW"}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerBox;
