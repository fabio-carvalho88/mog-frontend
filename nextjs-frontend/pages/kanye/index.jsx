import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

const Quotes = ({ quotes }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kanye Rest - The Best API ever</h1>
      <div></div>
      <p className={styles.text}>{quotes.quote}</p>
    </div>
  );
};

export const getStaticProps = async () => {
  const api = 'https://api.kanye.rest/';
  const res = await fetch(`${api}`);
  const quotes = await res.json();
  return {
    props: {
      quotes,
    },
  };
};

export default Quotes;
