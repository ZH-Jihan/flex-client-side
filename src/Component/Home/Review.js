import React from 'react';


const Review = (props) => {
    
    const { name, img, review, } = props.review;
    return (
      <div className="">
        <div class="card lg:max-w-lg  bg-accent text-white shadow-xl m-2 mt-8 ">
          <div class="avatar p-5 ">
            {img ? (
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt=''/>
              </div>
            ) : (
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={
                    "https://findicons.com/files/icons/61/dragon_soft/128/user.png"
                  }
                  alt=''
                />
              </div>
            )}
          </div>
          <div class="card-body">
            <p class="card-title">{name}</p>
            <p>
            <div>
        <div class="rating">
          <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
          <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
        </div>
      </div>
            </p>
            <p>{review}</p>
          </div>
        </div>
      </div>
    );
};

export default Review;