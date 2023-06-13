import React from 'react';
import ItemCSS from './Item.module.css';
import basket from '../../images/basket.png';

const Item = ({ name, caption, price, image }) => {
  return (
    <div className={ItemCSS.itemContainer}>
      <img className={ItemCSS.itemImage} srcset={image} alt="itemImg" />
      <h4 className={ItemCSS.itemName}>{name}</h4>
      <p className={ItemCSS.itemCaption}>{caption}</p>
      <p className={ItemCSS.itemPrice}>
        <span className={ItemCSS.dollarSign}>$ </span>
        {price}
      </p>

      <button style={{ border: 'none', background: 'white' }}>
        <img srcSet={basket} alt="basket" />
      </button>
    </div>
  );
};

export default Item;
