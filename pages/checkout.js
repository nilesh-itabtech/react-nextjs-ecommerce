import { useCart } from "@/context/CartContext";
import { useRouter } from "next/router";
import styles from "@/styles/Checkout.module.css";
import { useState } from "react";

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });

  if (cart.length === 0) {
    return <div style={{ height:"800px" }}><h2 className={styles.empty}>Your cart is Empty</h2></div>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    // 🔹 Normally API call here
    console.log("ORDER DATA:", {
      customer: form,
      items: cart,
      total,
    });

    clearCart();
    router.push("/success");
  };

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>

      <div className={styles.grid}>
        <form className={styles.form} onSubmit={placeOrder}>
          <h3>Billing Details</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Address"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
          />

          <button type="submit">Place Order</button>
        </form>
        <div className={styles.summary}>
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div key={item.id} className={styles.item}>
              <span>
                {item.name} × {item.qty}
              </span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}

          <hr />

          <div className={styles.total}>
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
