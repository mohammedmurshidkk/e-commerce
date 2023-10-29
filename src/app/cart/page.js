"use client";
import { useCart } from "@/CartContext";
import Link from "next/link";
import { headers } from "../../../next.config";

function Cart() {
  const { cartItems, cartTotal, removeFromCart, updateCartItemQuantity } =
    useCart();

  const handleQuantityChange = (id, qty) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(id, quantity);
    }
  };

  const removeItem = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="container mt-5">
      <h2>Your Shopping Cart</h2>
      {cartItems.length !== 0 ? (
        <div className="row">
          <div className="col-md-8 overflow-auto" style={{ height: "500px" }}>
            {cartItems.map(({ product, quantity }) => (
              <div key={product.id} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid rounded-start"
                      style={{ width: "80px", height: "auto" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title mb-2">{product?.title}</h5>
                      <p className="card-text mb-2">Price: ${product?.price}</p>
                      <div className="input-group mb-3">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() =>
                            handleQuantityChange(product.id, quantity - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={quantity}
                          readOnly
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() =>
                            handleQuantityChange(product.id, quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeItem(product?.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <p className="card-text">Total Items: {cartItems.length}</p>
                <p className="card-text">
                  Total Price: ${cartTotal.toFixed(2)}
                </p>
                <Link href="/checkout" className="btn btn-primary">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <img
            src="https://imgtr.ee/images/2023/10/29/512c0a54b37f8a83de2f0492376a77c4.png"
            width={600}
            className="me-5"
            alt="Empty Cart"
          />
          <Link href="/products" className="btn btn-primary mb-4">
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
