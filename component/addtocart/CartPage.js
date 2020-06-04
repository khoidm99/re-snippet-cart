import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
export default function Cart(props) {
	const { cart } = props;
	return (
		<div>
			<Container>
				<Table>
					<tbody>
						<tr>
							<th scope="row">{cart.id}</th>
							<td>{cart.name}</td>
							<td className>{cart.price}</td>
						</tr>
					</tbody>
				</Table>
			</Container>
		</div>
	);
}
