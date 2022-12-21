import React , {usestate} from 'react';
import sampleImage from '../../images/nor.jpg';
import "./pro.css"


const ProductRow = () => {
  return (
    <div >
    <div className="row product">
      <div className="col-md-2">
        <img src={sampleImage} alt="Sample Image" height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>Blue T-Shirt</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-md-2 product-price">
        $19.99
      </div>
    </div>
    </div>

  );
}

export default ProductRow;