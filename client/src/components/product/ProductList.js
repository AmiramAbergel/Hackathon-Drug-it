
import React, { Component } from 'react';
import ProductRow from './ProductRow';
import "./pro.css"

        

class ProductList extends Component {

  render() {
    return (
      <div className="container main-content">
        <ProductRow />
        <ProductRow />
      </div>
    );
  }
}

export default ProductList;
