import React from 'react';
import MainCSS from './Main.module.css';
import Item from '../Item/Item';
import data from '../../data/data.json';
import Order from '../Order/Order';
import { useBasket } from '../../context/basketContext';

const Main = () => {
  const { getBasketTotalAmount } = useBasket();

  return (
    <>
      <section className={MainCSS.introSection}>
        <p className={MainCSS.introHeading}>
          The fastest brunch delivery in
          <span className={MainCSS.city}> Your city</span>
        </p>

        <p className={MainCSS.desc}>
          This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How
          about you
        </p>
      </section>

      <section className={MainCSS.mediaScroll}>
        {data.items.map((item) => {
          return (
            <Item
              name={item.name}
              caption={item.caption}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </section>

      <section className={MainCSS.orderSection}>
        <Order totalAmount={getBasketTotalAmount() || '0.00'} />
      </section>
    </>
  );
};

export default Main;
