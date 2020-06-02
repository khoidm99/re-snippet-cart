import { useRouter } from 'next/router';

import Head from 'next/head';

import { observer, inject } from 'mobx-react';
import Link from 'next/link';
import { Button } from 'reactstrap';

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

				<h1>
					<strong>Loài Cá {news[0].title}</strong>
				</h1>
				<img src={news[0].image} className={styles.image} />
				<p className={styles.content}>{news[0].content}</p>
				<Link href="/newslist">
					<Button type="primary">
						<a>Quay Lại</a>
					</Button>
				</Link>
			</div>
		);
	})
);
