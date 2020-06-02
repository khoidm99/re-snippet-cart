import styles from './product.module.css';
import { Button } from 'reactstrap';
import Link from 'next/link';

export default function Product(props) {
	const { product } = props;
	return (
		<div className={styles.product}>
			<h2 className={styles.title}>{product.name}</h2>
			<p className={styles.description}>{product.description}</p>
			<Link href="/product/[id]" as={`/product/${product.id}`}>
				<img src={product.image} alt="" className={styles.image} width="100%" height="288px" />
			</Link>

			<div className={styles.price_button}>
				<div className={styles.price}>${product.price.toFixed(2)}</div>
				<Button className={styles.button} type="default">
					Add to cart
				</Button>
			</div>
		</div>
	);
}
