import { observable, computed, action, decorate } from 'mobx';

class CartStore {
	CartList = [
		{
			id: 1,
			name: 'Halfmoon Betta',
			price: 25.0,
			quantity: 1,
		},
		{
			id: 2,
			name: 'Dragon Scale Betta',
			price: 35.0,
			quantity: 1,
		},
		{
			id: 3,
			name: 'Crowntail Betta',
			price: 7.5,
			quantity: 1,
		},
		{
			id: 4,
			name: 'Veiltail Betta',
			price: 5.0,
			quantity: 1,
		},
	];
	total = 0;
	sumTotal = () => {
		return total++;
	};

	get sumTotal() {
		return this.quantity * sumTotal;
	}
	get getList() {
		return this.CartList;
	}
}

decorate(CartStore, {
	CartList: observable,
	getList: computed,
	sumTotal: computed,
});

const store = new CartStore();
export default store;
