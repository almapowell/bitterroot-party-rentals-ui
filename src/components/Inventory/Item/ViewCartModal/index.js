import React from "react";
import { Button, Modal } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatter } from "../../../../shared/utils";
import { addToCart } from "../../../../redux/cartSlice";
import { useNavigate } from "react-router";

const ViewCartModal = ({ product, quantityValue }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const redirect = (event, page) => {
    event.preventDefault();
    navigate(page);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantityValue }));
  };

  return (
    <React.Fragment key={product.id}>
      <button
        disabled={quantityValue === 0}
        className="secondary-button"
        onClick={() => {
          handleAddToCart(product);
          showModal();
        }}
      >
        Add to Cart
      </button>

      <Modal
        open={open}
        title="Added to cart!"
        onCancel={handleCancel}
        footer={[
          <Button onClick={(e) => redirect(e, "/inventory")}>
            Continue Shopping
          </Button>,
          <Button onClick={(e) => redirect(e, "/shopping-cart")} type="primary">
            View Cart
          </Button>,
        ]}
      >
        {cartItems.map((item) => (
          <div
            key={item._id}
            style={{
              display: "flex",
              gap: "30px",
              borderBottom: "1px solid lightgrey",
              marginBottom: 30,
            }}
          >
            <img height={100} src={item.images[0]} alt="Mini cart item image" />
            <div>
              <p>{item.title}</p>
              <p style={{ fontSize: 12 }}>Quantity: {item.quantity}</p>
              <p>{formatter.format(item.price * item.quantity)}</p>
            </div>
          </div>
        ))}
      </Modal>
    </React.Fragment>
  );
};
export default ViewCartModal;
