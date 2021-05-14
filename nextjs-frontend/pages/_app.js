import { Layout, Menu, Tooltip, Button } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

import 'antd/dist/antd.css';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import { SettingOutlined, SearchOutlined } from '@ant-design/icons';

import SelectLanguage from '../components/SelectLanguage';
import SearchModal from '../components/Search/SearchModal';
import SubMenuContent from '../components/SubMenuContent/SubMenuContent';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const MyApp = ({ Component, pageProps }) => {
  const [isModalVisible, setIsModalVisile] = useState(false);

  const showModalSearch = () => {
    setIsModalVisile(true);
  };

  const handleOk = () => {
    setIsModalVisile(false);
  };

  const handleCancel = () => {
    setIsModalVisile(false);
  };

  return (
    <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <Menu theme='dark' mode='horizontal'>
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

          <SubMenu key='SubMenu' title='Catalog'>
            <SubMenuContent />
          </SubMenu>

          <Menu.Item key='5'>
            <Link href='/mogcatalog'>
              <a>MOG Products</a>
            </Link>
          </Menu.Item>

          <Menu.Item style={{ float: 'right' }}>
            <SelectLanguage />
          </Menu.Item>

          <Menu.Item style={{ float: 'right', border: 'none' }}>
            <Tooltip title='search'>
              <Button
                type='link'
                icon={<SearchOutlined />}
                onClick={showModalSearch}
              />
            </Tooltip>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Component {...pageProps} />
        <SearchModal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        />
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
