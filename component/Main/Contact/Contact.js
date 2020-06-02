import styles from './contact.module.css';
import { Button } from 'reactstrap';

export default function Contact() {
	return (
		<div className={styles.contact}>
			<h2 className={styles.h2}>
				Any questions? <span className={styles.span}>Contact us.</span>
			</h2>
			<p className={styles.p}>
				We're looking forward to hearing from you. Feel free to contact us if you have any questions!
			</p>
			<Button shape="round" className={styles.button}>
				Contact Us
			</Button>
		</div>
	);
}
