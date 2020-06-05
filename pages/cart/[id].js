import { observer, inject } from 'mobx-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, Button } from 'reactstrap';
import CartPage from './../../component/addtocart/CartPage';
import Header from './../../component/Header/Header';
export default inject('CartStore')(
	observer(function CartId(props) {
		const router = useRouter();
		const carts = props.CartStore.CartList.filter((cart) => {
			return cart.id === router.query.id;
		});
		console.log(carts.id);
		return (
			<div>
				<Head>
					<title>Cart</title>
				</Head>
				<Container>
					<Header />
					<CartPage cart={carts[0]}></CartPage>
					<Link href="/">
						<Button type="primary">
							<a>Quay Lại</a>
						</Button>
					</Link>
				</Container>
			</div>
		);
	})
);
