import React from 'react';
import { Link } from 'react-router-dom';
const BannerBox = (props) => {  
    return (
        <div className='box bannerBox overflow-hidden rounded-lg group'>
            <Link to={"/"}>
            <div className='box'>
                <img src={props.img} alt="" className='w-full object-cover transition-all group-hover:scale-105 group-hover:rotate-1' />
            </div>
            </Link>
        </div>
    );
}

export default BannerBox;
