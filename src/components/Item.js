import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);
  const liClassName = inCart ? "in-cart" : "";

  function addButtonClickHandler(){
    setInCart(true);
  }

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addButtonClickHandler} >Add to Cart</button>
    </li>
  );
}

export default Item;
