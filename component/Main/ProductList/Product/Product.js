import { Button } from 'reactstrap';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from 'next/router';
import CartTable from '../../../addtocart/CartTable';
import { useState } from 'react';
import styles from './product.module.css';
function Product(props) {
	const { product } = props;
	function addToCart() {
		
	}
	return (
		<div>
			<Container>
				<Row>
					<Col lg="6" className="mb-3">
						<img src={product.image} width="480px" height="289px" />
					</Col>
					<Col lg="6" className=" mb-3">
						<h1>{product.name}</h1>
						<p>{product.description}</p>
						<Container>
							<Row>
								<Col lg="6">
									<p className="text-uppercase font-weight-bold">${product.price.toFixed(2)}</p>
								</Col>
								<Col lg="6">
									<Link href={`/Cart`}>
										<Button onClick={addToCart}>Add to Cart</Button>
									</Link>

									<Link href="/product/[id]" as={`/product/${product.id}`}>
										<Button className="ml-2" color="danger">
											View
										</Button>
									</Link>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default withRouter(Product);
