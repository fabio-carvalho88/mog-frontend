import { Menu, Tooltip, Button, Image } from 'antd';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import SubMenuContent from '../SubMenuContent/SubMenuContent';
import SearchModal from '../SearchModal/SearchModal';
import SelectLanguage from '../SelectLanguage';
import { SearchOutlined } from '@ant-design/icons';
import styles from './Navbar.module.css';

const { SubMenu } = Menu;

const Navbar = () => {
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
    <Menu theme='dark' mode='horizontal'>
      <Menu.Item style={{ float: 'left' }}>
        <Link href='/'>
          <Image
            width={100}
            preview={false}
            src='http://www.squarebox.com/wp-content/uploads/images/Mog-300x130.png'
          />
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
        <SearchModal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        />
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
