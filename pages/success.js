import Link from "next/link";
import styles from "@/styles/Success.module.css";
export default function Success() {
  return (
    <div style={{ textAlign: "center", margin: "80px", height:"500px" }}>
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Thank you for shopping with us.</p>
      <Link href="/">
        <button className={styles.continueShopping} style={{ marginTop: "20px" }}>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}