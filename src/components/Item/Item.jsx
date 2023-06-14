import React from 'react';
import ItemCSS from './Item.module.css';
import basket from '../../images/basket.png';
import { useBasket } from '../../context/basketContext';

const Item = ({ id, name, caption, price, image }) => {
  const { increaseBasketAmount, increaseBasketQuantity } = useBasket();

  return (
    <div className={ItemCSS.itemContainer}>
      <img className={ItemCSS.itemImage} srcSet={image} alt="itemImg" />
      <h4 className={ItemCSS.itemName}>{name}</h4>
      <p className={ItemCSS.itemCaption}>{caption}</p>
      <p className={ItemCSS.itemPrice}>
        <span className={ItemCSS.dollarSign}>$ </span>
        {price.toFixed(2)}
      </p>

      <button
        className={ItemCSS.basketBtn}
        onClick={() => {
          increaseBasketQuantity(id);
          increaseBasketAmount(price);
        }}
      >
        <img srcSet={basket} alt="basket" />
      </button>
    </div>
  );
};

export default Item;
