import { Layout, Menu } from 'antd';
import Link from 'next/link';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import 'antd/dist/antd.css';
import SelectLanguage from '../components/SelectLanguage';

const { Header, Footer, Sider, Content } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>
            <Link href='/'>
              <a>Homepage</a>
            </Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link href='/kanye'>
              <a>Kanye Rest</a>
            </Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link href='/hackernews'>
              <a>Hackernews</a>
            </Link>
          </Menu.Item>
          <Menu.Item key='4'>
            <Link href='/strapi'>
              <a>Strapi API</a>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ float: 'right' }}>
            <SelectLanguage />
          </Menu.Item>
        </Menu>
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
}

export default MyApp;
