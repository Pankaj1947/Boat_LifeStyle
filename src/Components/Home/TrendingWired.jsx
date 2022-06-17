import React from "react";
import { AiFillStar } from "react-icons/ai";

const TrendingWired = ({ handleDispatch }) => {

    let data = [
        {
            id: 17,
            imgURL:
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c3d0fbbd-9479-4351-bf04-91136da2ae91_400x.png?v=1625046259",
            productName: "boAt BassHeads 100",
            price: 399,
            strikedPrice: 999,
            Rating: 4.8,
            Reviews: 386,
        },
        {
            id: 18,
            imgURL:
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_400x.png?v=1574927262",
            productName: "boAt BassHeads 103",
            price: 369,
            strikedPrice: 1290,
            Rating: 4.8,
            Reviews: 470,
        },
        {
            id: 19,
            imgURL:
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_400x.png?v=1633152280",
            productName: "boAt BassHeads 102",
            price: 449,
            strikedPrice: 1290,
            Rating: 4.8,
            Reviews: 150,
        },
        {
            id: 20,
            imgURL:
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_400x.png?v=1625046386",
            productName: "boAt BassHeads 242",
            price: 449,
            strikedPrice: 1490,
            Rating: 4.8,
            Reviews: 330,
        },
    ];


    return (
        <div className="bestSellerDiv">
            <h1 className="headingText">Trending Wired</h1>
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

export default TrendingWired;
