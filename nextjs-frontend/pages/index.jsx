import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome{' '}
          <Link href='/kanye'>
            <a>to Kanye Rest!</a>
          </Link>
          <br />
          <Link href='/hackernews'>
            <a>and to HackerNews API!</a>
          </Link>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a>Powered by Fábio Carvalho</a>
      </footer>
    </div>
  );
}
