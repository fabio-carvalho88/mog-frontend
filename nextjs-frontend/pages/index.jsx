import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <main className={styles.main}>
        <h1 className={styles.title} style={{ width: '75%' }}>
          Transforming the way Content is created in the Cloud.
        </h1>
      </main>
    </div>
  );
}
