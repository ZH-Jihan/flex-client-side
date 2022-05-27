import React from 'react';
import { useQuery } from 'react-query';
import Review from '../Home/Review';
import Loading from '../Shared/Loading';

const Reviews = () => {

    const {
      data: reviews,
      isLoading,
      refetch,
    } = useQuery(["review"], () =>
      fetch("http://localhost:5000/review").then((res) => res.json()))
      console.log(reviews);
      if(isLoading){
        return <Loading />;
      }


    return (
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold mt-3 text-accent">Customer Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
    );
};

export default Reviews;