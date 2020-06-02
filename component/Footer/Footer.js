//css
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      Next.js app with a{" "}
      <a href="https://snipcart.com/blog/next-js-ecommerce-tutorial">
        Snipcart
      </a>{" "}
      - powered store
      <div className={styles.social}>
        <a href="#">Twitter</a>|<a href="#">Facebook</a>|<a href="#">Github</a>
      </div>
    </div>
  );
}
