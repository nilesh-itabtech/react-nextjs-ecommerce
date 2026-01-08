import Layout from '../components/Layout';
import '../styles/globals.css';
import { CartProvider } from "@/context/CartContext";

function MyApp({ Component, pageProps }) {
	return (
		<CartProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CartProvider>
	);
}

export default MyApp;
