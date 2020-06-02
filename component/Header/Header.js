import { Menu } from 'antd';
import { Container, Row, Col, Button } from 'reactstrap';
import { useRouter } from 'next/router';
import { NavbarBrand, Nav, Navbar, NavItem } from 'reactstrap';
import Router from 'next/router';
import { ShoppingCartOutlined, ReadOutlined, ShopOutlined } from '@ant-design/icons';
import styles from './header.module.css';
//Link
import Link from 'next/link';

export default function Header({ href }) {
	const router = useRouter();
	return (
		<div className={styles.header}>
			<Container>
				<Navbar light expand="lg">
					<NavbarBrand href="#" className="d-flex justify-content-between">
						<img src="/fish.svg" className="header__logo mt-2 " width="38px"></img>
						<Link href="#">
							<h1 className="header__title">FishCastle</h1>
						</Link>
					</NavbarBrand>
					<Nav className="ml-auto" navbar>
						<NavItem className=" d-flex">
							<Container>
								<Link href="#">
									<a
										className="header__summary snipcart-checkout snipcart-summary"
										href="#"
										style={{ textDecoration: 'none' }}
									>
										<svg
											width="31"
											height="27"
											viewBox="0 0 31 27"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M1.10512 0.368718C0.560256 0.368718 0.118164 0.812066 0.118164 1.35848C0.118164 1.9049 0.560256 2.34824 1.10512 2.34824H4.90887L8.30138 18.4009C8.43503 19.0053 8.83085 19.5079 9.32946 19.5041H25.7788C26.3005 19.5118 26.7799 19.0375 26.7799 18.5143C26.7799 17.9911 26.3006 17.5168 25.7788 17.5245H10.1315L9.71003 15.545H27.095C27.5371 15.5412 27.9547 15.2048 28.0511 14.7718L30.354 4.87412C30.4825 4.29933 29.9852 3.67172 29.3979 3.66786H7.21171L6.6771 1.15221C6.58329 0.71276 6.15921 0.368652 5.7107 0.368652L1.10512 0.368718ZM7.623 5.64746H12.7634L13.2569 8.61674H8.25005L7.623 5.64746ZM14.7785 5.64746H20.9881L20.4946 8.61674H15.2719L14.7785 5.64746ZM23.0031 5.64746H28.1537L27.4649 8.61674H22.5097L23.0031 5.64746ZM8.67181 10.5963H13.5862L14.0797 13.5656H9.29919L8.67181 10.5963ZM15.6009 10.5963H20.1656L19.6721 13.5656H16.0944L15.6009 10.5963ZM22.1807 10.5963H27.0023L26.3135 13.5656H21.6872L22.1807 10.5963ZM12.6197 20.164C10.8141 20.164 9.32979 21.6525 9.32979 23.4632C9.32979 25.2739 10.8141 26.7624 12.6197 26.7624C14.4252 26.7624 15.9095 25.2739 15.9095 23.4632C15.9095 21.6525 14.4252 20.164 12.6197 20.164ZM22.4892 20.164C20.6837 20.164 19.1994 21.6525 19.1994 23.4632C19.1994 25.2739 20.6837 26.7624 22.4892 26.7624C24.2948 26.7624 25.7791 25.2739 25.7791 23.4632C25.7791 21.6525 24.2948 20.164 22.4892 20.164ZM12.6197 22.1435C13.3586 22.1435 13.9356 22.7222 13.9356 23.4632C13.9356 24.2042 13.3586 24.7829 12.6197 24.7829C11.8807 24.7829 11.3037 24.2042 11.3037 23.4632C11.3037 22.7222 11.8807 22.1435 12.6197 22.1435ZM22.4892 22.1435C23.2282 22.1435 23.8052 22.7222 23.8052 23.4632C23.8052 24.2042 23.2282 24.7829 22.4892 24.7829C21.7503 24.7829 21.1733 24.2042 21.1733 23.4632C21.1733 22.7222 21.7503 22.1435 22.4892 22.1435Z"
												fill="#9094FF"
											/>
										</svg>
										<span className="header__price snipcart-total-price">CAD$ 0.00</span>
									</a>
								</Link>
							</Container>
						</NavItem>
					</Nav>
				</Navbar>
			</Container>

			<Menu theme="light" mode="horizontal" defaultSelectedKeys={[router.pathname === '/' ? '2' : '1']}>
				<Menu.Item key="1">
					<ReadOutlined />
					<Link href="/newslist">
						<a className="mt-2">Blog</a>
					</Link>
				</Menu.Item>

				<Menu.Item key="2">
					<Link href="/">
						<a></a>
					</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
}