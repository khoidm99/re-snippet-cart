import { inject, observer } from 'mobx-react';
import CartPage from './CartPage';
export default inject('CartStore')(
	observer(function cartList(props) {
		const carts = props.CartList;
		return (
			<div>
				{carts.map((cart) => {
					return (
						<div>
							<CartPage cart={cart}></CartPage>
						</div>
					);
				})}
			</div>
		);
	})
);
