import { Button } from 'reactstrap';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import { withRouter, useRouter } from 'next/router';

import { useState } from 'react';
import styles from './product.module.css';
function Product(props) {
	const { product } = props;
	const router = useRouter();
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
										<Button>
											<a
												className="mr-3 snipcart-add-item"
												data-item-id={product.id}
												data-item-name={product.name}
												data-item-price={product.price}
												data-item-url={props.router.pathname}
												data-item-image={props.product.image}
											>
												Add to Cart
											</a>
										</Button>
									</Link>

									<Link href="/product/[id]" as={`/product/${product.id}`}>
										<Button color="danger">View</Button>
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
