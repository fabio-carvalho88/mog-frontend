import { Card, Col, Row, Badge } from 'antd';
import styles from '../../styles/Home.module.css';

const Products = ({ products }) => {
  const { Meta } = Card;
  const api = 'http://localhost:1337';
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MOG PRODUCTS</h1>
      <Row className={styles.productsRow} justify='center' gutter={16}>
        {products.map((product) => (
          <Col span={8}>
            <Card
              key={product.id}
              bordered={false}
              cover={
                <img alt='product-img' src={`${api}${product.image[0].url}`} />
              }
            >
              <Meta
                title={product.name}
                description='This is a product description'
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export const getStaticProps = async () => {
  const api = 'http://localhost:1337/products';
  const res = await fetch(`${api}`);
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default Products;
