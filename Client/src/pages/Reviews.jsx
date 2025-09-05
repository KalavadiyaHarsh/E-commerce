import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { MyContext } from '../App';
import { fetchDataFromApi, postData } from '../utils/api';

const Reviews = (props) => {
    const context = useContext(MyContext);

    const [reviewsData, setReviewsData] = useState([]);

    const [reviews, setReviews] = useState({
        image: '',
        userName: '',
        review: '',
        rating: 1,
        userId: '',
        productId: '',
    });

    // userData / productId aane ke baad review object set karo
    useEffect(() => {
        setReviews((prev) => ({
            ...prev,
            image: context?.userData?.avatar,
            userName: context?.userData?.name,
            userId: context?.userData?._id,
            productId: props?.productId,
        }));
    }, [context?.userData, props?.productId]);

    // ✅ Reviews load karne ke liye useEffect
    useEffect(() => {
        if (props?.productId) {
            getReviews();
        }
    }, [props?.productId]);

    const getReviews = () => {
        fetchDataFromApi(`/api/user/getReviews?productId=${props?.productId}`).then(
            (res) => {
                if (res?.error === false) {
                    setReviewsData(res?.reviews);
                }
            }
        );
    };

    const onChangeInput = (e) => {
        setReviews((prev) => ({
            ...prev,
            review: e.target.value,
        }));
    };

    const addReview = (e) => {
        e.preventDefault();

        if (reviews?.review.trim() === '') {
            context.openAlertBox('error', "Please write a review!");
            return;
        }

        postData('/api/user/addReview', reviews).then((res) => {
            if (res?.error === false) {
                context.openAlertBox('success', res?.message);
                setReviews((prev) => ({
                    ...prev,
                    review: '',
                    rating: 1,
                }));
                
                getReviews();
            }
            else {
                context.openAlertBox('error', res?.message || "Something went wrong!");
            }
        });
    };

    return (
        <div className="w-full productReviewsContainer">
            <h2 className="text-[18px]">Customer questions & answers</h2>

            {reviewsData?.length !== 0 && (
                <div className="reviwescroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden">
                    {reviewsData.map((data, index) => (
                        <div
                            key={index}
                            className="review w-ful pb-5 pr-5 border-b-[1px] border-[rgba(0,0,0,0.1)] flex items-center justify-between"
                        >
                            <div className="info w-[60%] flex items-center gap-2 mt-3">
                                <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                    <img
                                        src={data?.image}
                                        alt={data?.userName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="w-[80%]">
                                    <h4 className="text-[16px]">{data?.userName}</h4>
                                    <h5 className="text-[13px] mb-0">
                                        {new Date(data?.createdAt).toLocaleDateString()}
                                    </h5>
                                    <p className="mt-0 mb-0">{data?.review}</p>
                                </div>
                            </div>

                            <Rating
                                name="size-small"
                                value={data?.rating}
                                size="small"
                                readOnly
                            />
                        </div>
                    ))}
                </div>
            )}

            <br />

            <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                <h2 className="text-[18px]">Add a review</h2>

                <form className="w-full mt-4" onSubmit={addReview}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Write a Review..."
                        className="w-full"
                        onChange={onChangeInput}
                        name="review"
                        value={reviews.review}
                        multiline
                        rows={5}
                    />
                    <br />
                    <br />
                    <Rating
                        name="size-small"
                        value={reviews.rating}
                        size="small"
                        onChange={(event, newValue) => {
                            setReviews((prev) => ({
                                ...prev,
                                rating: newValue,
                            }));
                        }}
                    />

                    <div className="flex items-center">
                        <br />
                        <br />
                        <Button type="submit" className="!bg-primary !text-white ">
                            Submit Review
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reviews;
