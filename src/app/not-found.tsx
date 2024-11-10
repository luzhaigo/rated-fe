import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <h2>Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
