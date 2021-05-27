import { Layout } from 'antd';
import 'antd/dist/antd.css';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar/Navbar';
import { useEffect, useState } from 'react';

const { Header, Content, Footer } = Layout;

const MyApp = ({ Component, pageProps }) => {
  const [scrollState, setScrollState] = useState('top');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY >= 1020) {
      setScrollState('scroll');
    } else if (window.scrollY <= 300) {
      setScrollState('top');
    }
    // CSS COLOR 1a1a251a
  };

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 1,
          background: scrollState === 'top' ? '#1a1a251a' : '#1A1A25',
        }}
      >
        <Navbar />
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer
        style={{
          background: 'linear-gradient(180deg, #1A1A25 0%, #1A1A25 100%)',
        }}
      >
        <footer className={styles.footer}>
          <a>Powered by Fábio Carvalho</a>
        </footer>
      </Footer>
    </Layout>
  );
};

export default MyApp;
