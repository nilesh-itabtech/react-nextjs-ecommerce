import { useCart } from "@/context/CartContext";
import styles from "@/styles/components/CartSummary.module.css";
import Link from "next/link";
export default function CartSummary() {
  const {
    cart,
    updateQty,
    removeItem,
    total,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <div className={`${styles.drawer} ${isCartOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <h4>Cart summary</h4>
        <span className={styles.close} onClick={() => setIsCartOpen(false)}>✕</span>
      </div>
      <div className={styles.container}>
        {cart.length === 0 && <p>Cart is Empty</p>}
        {cart.map((item) => (
            <div key={item.id} className={styles.item}>
            <div>
                <strong>{item.name}</strong>
                <div className={styles.qty}>
                <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                </div>
            </div>

            <div className={styles.price}>
                <span>${(item.price * item.qty).toFixed(2)}</span>
                <button className={styles.removeCart} onClick={() => removeItem(item.id)}>🗑</button>
            </div>
            </div>
        ))}

        <div className={styles.footer}>
            <p>Total: <strong>${total.toFixed(2)}</strong></p>
            <Link href="/checkout">
                <button className={styles.checkout}>Checkout →</button>
            </Link>
            
        </div>
      </div>  
    </div>
  );
}
