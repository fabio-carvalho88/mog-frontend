import { Layout } from 'antd';
import 'antd/dist/antd.css';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar/Navbar';

const { Header, Content, Footer } = Layout;

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <Navbar />
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer>
        <footer className={styles.footer}>
          <a>Powered by Fábio Carvalho</a>
        </footer>
      </Footer>
    </Layout>
  );
};

export default MyApp;
