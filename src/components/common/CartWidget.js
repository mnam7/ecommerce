import React from 'react'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to="/cart"><a>🛒<span style={{color:"#fff"}}>0</span></a></Link>
  );
};

export default CartWidget;