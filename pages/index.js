import Head from 'next/head';
import Footer from './../component/Footer/Footer';
import Header from './../component/Header/Header';

import Contact from './../component/Main/Contact/Contact';
import ProductList from './../component/Main/ProductList/ProductList';

//mobx
import { observer, inject } from 'mobx-react';

export default inject('ProductStore')(
	observer(function Home(props) {
		return (
			<div className="container">
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
					<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
					<script
						src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
						data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4"
						id="snipcart"
					></script>
					<link
						href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
						rel="stylesheet"
						type="text/css"
					/>
				</Head>
				<header>
					<Header />
				</header>

				{/* phần content */}
				<main>
					<img src="/aquarium.svg" alt="a" className="background-image" />
					<div className="promotional-message">
						<h3>REDISCOVER</h3>
						<h2>Fishkeeping</h2>
						<p>
							An <strong>exclusive collection of bettas</strong> available for everyone.
						</p>
					</div>

					{/* ProductList */}
					<ProductList productList={props.ProductStore.productList} />

					{/* Contact */}
					<Contact />
				</main>

				{/* phần footer */}
				<footer>
					<Footer />
				</footer>

				<style jsx global>{`
					html,
					body {
						padding: 0;
						margin: 0;
						font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
							Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
					}

					* {
						box-sizing: border-box;
					}
				`}</style>
			</div>
		);
	})
);
