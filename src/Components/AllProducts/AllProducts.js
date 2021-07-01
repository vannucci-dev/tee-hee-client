import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import axios from "axios";
import SmallCard from "../ProductCard/SmallCard";

export default function AllProducts(props) {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    const productsRequest = async () => {
      try {
        const res = await axios.get(`/api/products/${props.category}`);
        const { data } = res;
        setProductsState(data);
      } catch (err) {
        console.error(err);
      }
    };
    productsRequest();
  }, [props.category]);

  let width = window.innerWidth;
  let groupSize = width > 800 ? 5 : 3;
  let rows = productsState
    .map(function (product) {
      // map content to JSX elements
      return (
        <SmallCard
          name={product.name}
          price={product.price}
          description={product.description}
          image_link={product.image_link}
          product_id={product.product_id}
        />
      );
    })
    .reduce(function (r, element, index) {
      // create element groups with size 5, result looks like:
      index % groupSize === 0 && r.push([]);
      r[r.length - 1].push(element);
      return r;
    }, [])
    .map(function (rowContent) {
      // surround every group with 'Col'
      return <Col style={{ display: "flex", width: "100%" }}>{rowContent}</Col>;
    });
  return <div>{rows}</div>;
}
