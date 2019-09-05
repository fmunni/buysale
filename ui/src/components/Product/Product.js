import React from "react";
import Paper from "@material-ui/core/Paper";
import "./product.css";
import { Divider } from "@material-ui/core";
class Product extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <Paper className="product-container">
        <h3> Title : {product.name} </h3>
        <div className="price-container">
          Price: <div className="product-price"> $ {product.price} </div>
        </div>
        <div> Seller: {product.seller}</div>
        <div> Date: {product.listingDate}</div>
      </Paper>
    );
  }
}

export default Product;
