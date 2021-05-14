import { Row, Col, Divider } from 'antd';
import Link from 'next/link';
import {
  CloudOutlined,
  FolderOutlined,
  FundProjectionScreenOutlined,
  ForkOutlined,
  VideoCameraOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

const MenuCatalog = () => {
  return (
    <div
      style={{
        width: '100%',
        height: 'fit-content',
        marginTop: '2rem',
        padding: '10px 150px',
      }}
    >
      <Row gutter={(16, 16)} style={{ height: '200px' }}>
        <Col span={6}>
          <div className='productsCatalogue'>
            <Row
              wrap={false}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                columnGap: '5px',
              }}
            >
              <Col flex='10px'>
                <CloudOutlined className='icon' style={{ lineHeight: 0 }} />
              </Col>
              <Col flex='auto'>
                <h4 className='productName'>MAM4PRO</h4>
              </Col>
            </Row>

            <Row style={{ columnGap: '5px' }}>
              <Col flex='20px' />
              <Col flex='auto'>
                <h4 className='description'>Cloud Media Production</h4>
              </Col>
            </Row>
          </div>

          <div className='productsLinks'>
            <p>
              <a href='#'>Virtual Media Operations</a>
            </p>
            <p>
              <a href='#'>Production Management</a>
            </p>
            <p>
              <a href='#'>Deploy Options</a>
            </p>
          </div>
        </Col>
        <Col span={6}>
          <div className='productsCatalogue'>
            <CloudOutlined className='icon' />
            <span className='texts'>
              <h4 className='productName'>MAM4PRO</h4>
              <h4 className='description'>Cloud Media Production</h4>
            </span>
          </div>

          <div className='productsLinks'>
            <p>
              <a href='#'>Virtual Media Operations</a>
            </p>
            <p>
              <a href='#'>Production Management</a>
            </p>
            <p>
              <a href='#'>Deploy Options</a>
            </p>
          </div>
        </Col>
        <Col span={6}>
          <div className='productsCatalogue'>
            <CloudOutlined className='icon' />
            <span className='texts'>
              <h4 className='productName'>MAM4PRO</h4>
              <h4 className='description'>Cloud Media Production</h4>
            </span>
          </div>

          <div className='productsLinks'>
            <p>
              <a href='#'>Virtual Media Operations</a>
            </p>
            <p>
              <a href='#'>Production Management</a>
            </p>
            <p>
              <a href='#'>Deploy Options</a>
            </p>
          </div>
        </Col>
        <Col span={6}>
          <div className='productsCatalogue'>
            <CloudOutlined className='icon' />
            <span className='texts'>
              <h4 className='productName'>MAM4PRO</h4>
              <h4 className='description'>Cloud Media Production</h4>
            </span>
          </div>

          <div className='productsLinks'>
            <p>
              <a href='#'>Virtual Media Operations</a>
            </p>
            <p>
              <a href='#'>Production Management</a>
            </p>
            <p>
              <a href='#'>Deploy Options</a>
            </p>
          </div>
        </Col>
      </Row>

      <Row gutter={(16, 16)} style={{ height: '200px' }}>
        <Col span={6}>
          <div className='productsCatalogue'>
            <CloudOutlined className='icon' />
            <span className='texts'>
              <h4 className='productName'>MAM4PRO</h4>
              <h4 className='description'>Cloud Media Production</h4>
            </span>
          </div>

          <div className='productsLinks'>
            <p>
              <a href='#'>Virtual Media Operations</a>
            </p>
            <p>
              <a href='#'>Production Management</a>
            </p>
            <p>
              <a href='#'>Deploy Options</a>
            </p>
          </div>
        </Col>
        <Col span={6}></Col>
        <Col span={6}></Col>
      </Row>
    </div>
  );
};

export default MenuCatalog;
