import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => (
  <div className='products'>
    <ul className='product1'>
      <li>
        <Link to='/Reviews'>
          Product1
        </Link>
      </li>
    </ul>
  </div>
);
export default Products;