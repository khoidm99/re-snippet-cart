import styles from './product.module.css';
import { Button } from 'reactstrap';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
export default function Product(props) {
	const { product } = props;
	return (
		<div>
			<Container>
				<Row>
					<Col lg="6">
						<img src={product.image} width="480px" height="289px" />
					</Col>
					<Col lg="6">
						<h1>{product.name}</h1>
						<p>{product.description}</p>
						<Container>
							<Row>
								<Col lg="6">
									<p className="text-uppercase font-weight-bold">{product.price}</p>
								</Col>
								<Col lg="6">
									<Button color="primary">Add to cart</Button>
									<Link href="/product/[id]" as={`/product/${product.id}`}>
										<Button color="danger" >View</Button>
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
