import { observer, inject } from 'mobx-react';
import { Card } from 'reactstrap';
//css
import styles from './news.module.css';
//link
import Link from 'next/link';

export default inject('NewsStore')(
	observer(function News(props) {
		return (
			<div>
				{props.NewsStore.newsList.map((news, index) => (
					<div key={index}>
						<Card
							title={news.title}
							extra={
								<Link href="/news/[id]" as={`/news/${news.id}`}>
									<a>Đọc Thêm</a>
								</Link>
							}
							style={{ width: 500, margin: '2rem  auto' }}
						>
							<div className={styles.imgText}>
								<img src={news.image} width="200rem" height="130rem" className={styles.img} />
								<p className={styles.description}>
									<strong>{news.description}</strong>
								</p>
							</div>
						</Card>
					</div>
				))}
			</div>
		);
	})
);

/*<Card
            hoverable
            style={{ width: 500, margin: "auto" }}
            cover={<img alt="example" src={news.image} />}
          >
            <Meta title={news.id} description={news.description} />
          </Card> */
