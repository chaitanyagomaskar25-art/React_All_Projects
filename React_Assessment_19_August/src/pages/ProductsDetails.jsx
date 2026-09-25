import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";

const ProductsDetails = () => {
  const { id } = useParams();
  const data = useFetch(`https://fakestoreapi.com/products/${id}`)

  if(data.props){
      return data.props.children
  }

  return (
    <div>
      <h3>{data.title}</h3>
      <img src={data.image} alt={data.title} />
      <p>{data.description}</p>
      <p>{data.price}</p>
      <p>{data.category}</p>
    </div>
  );
};

export default ProductsDetails;
