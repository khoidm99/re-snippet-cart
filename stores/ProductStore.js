import { observable, computed, action, decorate } from 'mobx';

class ProductStore {
	productList = [
		{
			id: 1,
			name: 'Halfmoon Betta',
			description:
				'The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.',
			image: '/halfmoon.jpg',
			price: 25.0,

			url: 'MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4',
		},
		{
			id: 2,
			name: 'Dragon Scale Betta',
			description:
				'The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.',
			image: '/dragonscale.jpg',
			price: 35.0,
			url: 'MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4',
		},
		{
			id: 3,
			name: 'Crowntail Betta',
			description:
				"The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
			image: '/crowntail.jpg',
			price: 7.5,
			url: 'MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4',
		},
		{
			id: 4,
			name: 'Veiltail Betta',
			description: 'By far the most common betta fish. You can recognize it by its long tail aiming downwards.',
			image: '/veiltail.jpg',
			price: 5.0,
			url: 'MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4',
		},
	];

	//tạo action
	addProduct = (product) => {
		this.productList.unshift(product); //cho lên đầu
	};

	deleteProduct = (productDelete) => {
		this.productList = this.productList.filter((product) => product.name !== productDelete.name);
	};

	//tính toán để trả về
	get getProducts() {
		return this.productList;
	}
}

decorate(ProductStore, {
	productList: observable,
	addProduct: action,
	deleteProduct: action,
	getProducts: computed,
});

const store = new ProductStore();

export default store;
