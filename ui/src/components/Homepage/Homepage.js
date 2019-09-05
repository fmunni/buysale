import React from "react";
import "./Homepage.css";
import Button from "@material-ui/core/Button";
import Product from "../Product/Product";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    axios.get("/api/products").then(res => {
      //console.log("mak:", res.data);
      this.setState({ products: res.data.products });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Grid container alignItems="center" spacing={8} className="home">
          <Grid item xs={3}>
            <h1>EZONE</h1>
          </Grid>
          <Grid item xs={6}>
            <p>Welcome to EZone</p>
            <p>This website is for buying and selling any products.</p>
          </Grid>
          <Grid item xs={3}>
            Search
          </Grid>
        </Grid>

        {products.map(product => {
          return <Product product={product} />;
        })}
      </div>
    );
  }
}

export default Homepage;
