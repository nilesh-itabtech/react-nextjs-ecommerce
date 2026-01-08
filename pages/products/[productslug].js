import Head from 'next/head';
import { useRouter } from "next/router";
import styles from '../../styles/SingleProduct.module.css';
import allProducts from '../data/products.json';
import { useCart } from "@/context/CartContext";

const singleproduct = () => {
  const { addToCart } = useCart();
  const router = useRouter();
  const { productslug } = router.query;
  console.log("ddd",productslug);
  // find product by id
  const product = allProducts.find((item) => item.slug == productslug);

  if (!product) {
    return (
        <>
			<Head>
				<title>Product not found</title>
			</Head>
            <div className={styles.single_container}>
                <h3 className={styles.title}>Product Not found</h3>
            </div>
		</>
    );
  }else{
        return (
            <>
                <Head>
                    <title>{product.name}</title>
                </Head>
                <div className={styles.single_container}>
                    <div className={styles.left_section}>
                        <img src={product.image.url} className={styles.left_img} alt="" />
                    </div>
                    <div className={styles.right_section}>
                        <h3 className={styles.title}>{product.name}</h3>
                        <p className={styles.price}>{product.price}</p>
                        <div className={styles.para}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                                impedit voluptatum vitae labore molestiae, maiores, hic ad
                                officiis laudantium in officia, nam vel quod! Nesciunt aperiam
                                explicabo facere laboriosam eius.
                            </p>
                        </div>
                        <button className="btn" onClick={() => addToCart(product)}>Add to cart 🛒</button>
                    </div>
                </div>
            </>
        );
    }  
};

export default singleproduct;
