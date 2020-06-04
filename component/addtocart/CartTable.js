import { inject, observer } from 'mobx-react';
export default inject('CartStore')(
	observer(function cartList(props) {
		const carts = props.CartList;
		return (
			<div>
				{carts.filter((cart) => {
					<div>
						<h1>
							<p>{cart.id}</p>
						</h1>
					</div>;
				})}
			</div>
		);
	})
);
