import { useRouter } from 'next/router';

import Head from 'next/head';

import { observer, inject } from 'mobx-react';
import Link from 'next/link';
import { Button, Container } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import styles from './news.module.css';

export default inject('NewsStore')(
	observer(function NewsId(props) {
		const router = useRouter();
		const news = props.NewsStore.newsList.filter((news) => news.id === +router.query.id);

		return (
			<div className={styles.container}>
				<Head>
					<title>{router.query.id}</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Card>
					<Container>
						<img className={styles.image} src={news[0].image}></img>
					</Container>

					<CardBody>
						<CardTitle>Loài Cá {news[0].title}</CardTitle>

						<CardText>{news[0].content}</CardText>
						<Link href="/newslist">
							<Button type="primary">
								<a>Quay Lại</a>
							</Button>
						</Link>
					</CardBody>
				</Card>
			</div>
		);
	})
);
