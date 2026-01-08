import Navbar from './Navbar';
import Footer from './Footer';
import CartSummary from "./CartSummary";
const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
            <CartSummary />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;