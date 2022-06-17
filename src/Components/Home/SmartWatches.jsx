import React from "react";
import { AiFillStar } from "react-icons/ai";

const SmartWatches = ({ handleDispatch }) => {

    let data = [
        {
            id: 9,
            imgURL:
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_400x.png?v=1647765304",
            productName: "boAt Watch Wave Pro",
            price: 3299,
            strikedPrice: 6990,
            Rating: 5.0,
            Reviews: 10,
        },
        {
            id: 10,
            imgURL:
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_400x.png?v=1625157753",
            productName: "boAt Watch Flash",
            price: 2499,
            strikedPrice: 6990,
            Rating: 4.8,
            Reviews: 43,
        },
        {
            id: 11,
            imgURL:
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_400x.png?v=1625046216",
            productName: "boAt Storm",
            price: 2499,
            strikedPrice: 5990,
            Rating: 4.8,
            Reviews: 912,
        },
        {
            id: 12,
            imgURL:
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_400x.png?v=1640237576",
            productName: "boAt Watch Iris",
            price: 4399,
            strikedPrice: 11990,
            Rating: 5.0,
            Reviews: 2,
        },
    ];


    return (
        <div className="bestSellerDiv">
            <h1 className="headingText">Smart Watches</h1>
            <div className="cardsDiv flex">
                {data.map((e) => {
                    return (
                        <div key={e.id} className="card">
                            <div className="imageDiv">
                                <img src={e.imgURL} alt="" />
                            </div>
                            <div className="dataDiv">
                                <p className="title">{e.productName}</p>
                                <p className="reviewsDiv">
                                    <AiFillStar color="red" />
                                    {e.Rating} ({e.Reviews} reviews)
                                </p>
                                <hr className="linedivide" />
                                <div className="priceDiv flex">
                                    <div className="flex">
                                        <p className="price">₹ {e.price}</p>
                                        <p className="strPrice">₹ {e.strikedPrice}</p>
                                    </div>
                                </div>
                                <div className="savings">
                                    {`You Save: ₹${e.strikedPrice - e.price} (${((e.strikedPrice - e.price) * 100 / e.strikedPrice).toFixed(0)}%)`}
                                </div>
                                <div>
                                    <button
                                        onClick={() => handleDispatch(e)}
                                        className="cardBtn"
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SmartWatches;
