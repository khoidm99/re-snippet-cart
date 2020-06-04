import { observable, computed, action, decorate } from 'mobx';

class CartStore {
	CartList = [
		{
			id: 1,
			name: 'Halfmoon Betta',
			price: 25.0,
		},
		{
			id: 2,
			name: 'Dragon Scale Betta',
			price: 35.0,
		},
		{
			id: 3,
			name: 'Crowntail Betta',
			price: 7.5,
		},
		{
			id: 4,
			name: 'Veiltail Betta',
			price: 5.0,
		},
	];
	total = 0;
	totalPrice = 0;
	sumTotal() {
		total++;
	}
	quantity = 0;
	sumTotalPrice(){
		return 
	}
	// quantity = ()

	addToCart = () => {
		this.CartList = this.CartList.reduce((a, b) => {
			return a.price + b;
		}, 0);
	};
	get getList() {
		return this.CartList;
	}
}

decorate(CartStore, {
	CartList: observable,
	addToCart: action,
	getList: computed,
});

const store = new CartStore();
export default store;
