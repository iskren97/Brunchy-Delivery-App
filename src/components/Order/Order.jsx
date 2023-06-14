import React, { useEffect, useState } from 'react';
import basket from '../../images/basket.png';
import OrderCSS from './Order.module.css';
import OrderReview from '../OrderReview/OrderReview.jsx';
import SuccessModal from '../SuccessModal/SuccessModal';
import { useBasket } from '../../context/basketContext';

const Order = ({ totalAmount, showReview, setShowReview }) => {
  const [showModal, setShowModal] = useState(false);
  const { resetBasketState } = useBasket();

  useEffect(() => {
    if (showReview) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [showReview]);

  return (
    <>
      {showReview && (
        <OrderReview setOpen={setShowReview} totalAmount={totalAmount} />
      )}

      {showModal && <SuccessModal setOpenModal={setShowModal} />}

      <div className={OrderCSS.orderContainer}>
        <button
          className={OrderCSS.basketBtn}
          onClick={() => setShowReview(true)}
        >
          <img srcSet={basket} alt="basket" />
        </button>

        <p className={OrderCSS.orderPrice}>{totalAmount}$</p>

        <button
          onClick={() => {
            resetBasketState();
            setShowModal(true);
          }}
          className={OrderCSS.orderBtn}
          disabled={!Number(totalAmount)}
        >
          Order Now
        </button>
      </div>
    </>
  );
};

export default Order;
