import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
export default function Cart(props) {
	return (
		<div>
			<Container>
				<Table>
					<tbody>
						<tr>
							<th scope="row">{props.id}</th>
							<td>{props.name}</td>
							<td>{props.quantity}</td>
							<td>${props.price}</td>
						</tr>
					</tbody>
				</Table>
			</Container>
		</div>
	);
}
