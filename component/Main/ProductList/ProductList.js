import Product from './Product/Product';

import { inject, observer } from 'mobx-react';
export default inject('ProductStore')(
	observer(function ProductList(props) {
		const products = props.productList;
		return (
			<div>
				{products
					? products.map((product, index) => {
							return <Product product={product} key={index} />;
					  })
					: console.log(products)}
			</div>
		);
	})
);
