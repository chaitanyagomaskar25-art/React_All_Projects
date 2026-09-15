import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Product Catalog</h1>
      <p className="descriptionOfWebsite">Welcome to our product catalog! Here you can find a wide range of products at great prices.</p>
    <div className="container">
      {data.map((item) => (
        <div className="card" key={item.id}>
          
          <div className="topbar">
            <p>{item.category}</p>
            <img src={item.thumbnail} alt={item.title} />
          </div>

          <div className="main">
            <h2>{item.title}</h2>
            <p>{item.description}</p>

            <div className="ratings">
              <p>Price: {item.price}</p>
              <p>Rating: {item.rating}</p>
              <p>Discount: {item.discountPercentage}</p>
              <p>Stock: {item.stock}</p>
              <p>Tags: {item.tags?.join(", ")}</p>
              <p>Brand: {item.brand}</p>

              {item.dimensions && (
                <p>
                  Dimensions: {item.dimensions.width} x{" "}
                  {item.dimensions.height} x {item.dimensions.depth}
                </p>
              )}

              <p>Warranty: {item.warrantyInformation}</p>
              <p>Shipped In: {item.shippingInformation}</p>
              <p>Availability: {item.availabilityStatus}</p>

              <div className="reviews"> 
                <h2>Reviews: </h2>
                {item.reviews?.map((review, index) => (
                  <div className="review" key={index}>
                    <p>{review.reviewerName}</p>
                    <p>{review.reviewerEmail}</p>
                    <p>{review.comment}</p>
                    <p>Rating: {review.rating}</p>
                  </div>
                ))}
              </div>

              <p>Return Policy: {item.returnPolicy}</p>
              <p>Min Order Quantity: {item.minimumOrderQuantity}</p>

              {item.meta && (
                <div className="metaItem">
                  <p>Created At: {item.meta.createdAt}</p>
                  <p>Updated At: {item.meta.updatedAt}</p>
                  <p>Barcode: {item.meta.barcode}</p>
                  <img src={item.meta.qrCode} alt="qr" />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Main;