import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
<Link to={"/detail/" + product.id} className="card">
    <img className="image" src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>Precio: ${product.price}</p>
</Link>

  );
}

export default Item;
