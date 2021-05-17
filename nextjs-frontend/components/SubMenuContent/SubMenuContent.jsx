import 'antd/dist/antd.css';
import { Col, Row, Divider } from 'antd';
import products from "./ProductsList";

import styles from './SubMenuContent.module.css';

function MenuContent() {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ padding: '40px 100px' }}>
      <Row gutter={[16, 16]}>
          {products.slice(0, 4).map((product) => {
            return (
              <Col span={6} className={styles.col} key={`product_${product.family}`}>
                <Col flex="0px" className={styles.icon}>
                  {product.icon}
                </Col>
                <Col flex="auto" className={styles.product}>
                  <div className={styles.title}>
                    <h4>{product.family}</h4>
                    <h4>{product.description}</h4>
                  </div>
                  <div className={styles.links}>
                    {product.models.map((model) => {
                      return <a key={`link_${model.name}`} href={model.link}>{model.name}</a>;
                    })}
                  </div>
                </Col>
              </Col>
            );
          })}
        </Row>

        <Row gutter={[16, 16]}>
          {products.slice(4, 7).map((product) => {
            return (
              <Col span={6} className={styles.col} key={`product_${product.family}`}>
                <Col flex="0px" className={styles.icon}>
                  {product.icon}
                </Col>
                <Col flex="auto" className={styles.product}>
                  <div className={styles.title}>
                    <h4>{product.family}</h4>
                    <h4>{product.description}</h4>
                  </div>
                  <div className={styles.links}>
                    {product.models.map((model) => {
                      return <a key={`link_${model.name}`} href={model.link}>{model.name}</a>;
                    })}
                  </div>
                </Col>
              </Col>
            );
          })}
        </Row>
      </div>

      <div style={{ width: '100%' }}>
        <Divider style={{ margin: '0' }} />
        <Row style={{ margin: '20px auto' }}>
          <a href='#'>Explore our catalogue</a>
        </Row>
      </div>
    </div>
  );
}

export default MenuContent;
