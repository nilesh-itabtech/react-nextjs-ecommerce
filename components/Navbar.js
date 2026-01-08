import Link from 'next/link';
import { useCart } from "@/context/CartContext";
import styles from '../styles/components/Navbar.module.css';

const Navbar = () => {
	const { setIsCartOpen, cart,total } = useCart();
	return (
		<nav className={styles.navbar}>
			<Link href="/">
				<div className={styles.logo}>
					<p>
						PLANTS <span className={styles.logo_span}>☘</span>
					</p>
				</div>
			</Link>
			<div className={styles.nav_price}>
				<span onClick={() => setIsCartOpen(true)} style={{ display:"flex",alignItems: "center" }}>
					<p>🛒 ({cart.length})</p>
					<p style={{ marginLeft:"10px"}} className="snipcart-total-price">${total.toFixed(2)}</p>
				</span>
				
			</div>
		</nav>
	);
};

export default Navbar;