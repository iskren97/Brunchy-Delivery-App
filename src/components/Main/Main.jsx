import React, { useState } from 'react';
import MainCSS from './Main.module.css';
import Item from '../Item/Item';
import data from '../../data/data.json';
import Order from '../Order/Order';
import { useBasket } from '../../context/basketContext';
import Header from '../Header/Header';

const Main = () => {
  const { getBasketTotalAmount } = useBasket();
  const [showReview, setShowReview] = useState(false);

  return (
    <>
      <Header />

      <div
        onClick={(e) => {
          if (showReview) {
            return !e.target.className.includes('OrderReview')
              ? setShowReview(false)
              : null;
          }
        }}
      >
        <section className={MainCSS.introSection}>
          <p className={MainCSS.introHeading}>
            The fastest brunch delivery in
            <span className={MainCSS.city}> Your city</span>
          </p>

          <p className={MainCSS.desc}>
            This is my Exploration for Fruit - Food Delivery Landing Page 🍕.
            How about you ?
          </p>
        </section>

        <section className={MainCSS.mediaScroll}>
          {data.items.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                caption={item.caption}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </section>

        <section className={MainCSS.orderSection}>
          <Order
            showReview={showReview}
            setShowReview={setShowReview}
            totalAmount={getBasketTotalAmount() || 0.0}
          />
        </section>
      </div>
    </>
  );
};

export default Main;
