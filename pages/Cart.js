import { observer, inject } from 'mobx-react';
import Head from 'next/head';
import Header from './../component/Header/Header';
import { Container } from 'reactstrap';
import { Table } from 'reactstrap';
import CartTable from './../component/addtocart/CartTable';

export default inject('CartStore')(
	observer(function CartList(props) {
		return (
			<div>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Container>
					<Header />
					<Table>
						<thead>
							<tr>
								<th>id</th>
								<th>name</th>
								<th>quantity</th>
								<th>price</th>
							</tr>
						</thead>
					</Table>
					<Table>
						<tbody>
							<CartTable CartList={props.CartStore.CartList} />
						</tbody>
					</Table>
				</Container>
			</div>
		);
	})
);
