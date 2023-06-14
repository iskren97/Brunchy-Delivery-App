import React, { useEffect, useState } from 'react';
import basket from '../../images/basket.png';
import OrderCSS from './Order.module.css';
import OrderReview from '../OrderReview/OrderReview.jsx';
import SuccessModal from '../SuccessModal/SuccessModal';

const Order = ({ totalAmount, showReview, setShowReview }) => {
  const [showModal, setShowModal] = useState(false);

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
          onClick={() => {
            setShowReview(true);
          }}
        >
          <img srcSet={basket} alt="basket" />
        </button>

        <p className={OrderCSS.orderPrice}>{totalAmount}$</p>

        <button
          onClick={() => {
            setShowModal(true);
          }}
          className={OrderCSS.orderBtn}
        >
          Order Now
        </button>
      </div>
    </>
  );
};

export default Order;
