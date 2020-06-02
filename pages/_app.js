import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Provider } from 'mobx-react';
import ProductStore from '../stores/ProductStore';
import NewsStore from '../stores/NewsStore';
import '../styles.css';
//có thể dùng tạo
/*const store = {ProductStore,NewsStore} 
  ở phần Provider dùng store = {...store} cũng được

*/

export default function MyApp({ Component, pageProps }) {
	return (
		<Provider ProductStore={ProductStore} NewsStore={NewsStore}>
			<Component {...pageProps} />
		</Provider>
	);
}
