import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const ProductPage = ({ match }) => {
  return (
    <React.Fragment>
      <div>Strona produktu</div>
      <Product id={match.params.id} />
      <Link to="/products">Powrót do listy produktów</Link>
    </React.Fragment>
  ); 
};

export default ProductPage;
