import { Card, Col, Row } from 'antd';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Products = ({ products }) => {
  const { Meta } = Card;
  const { pathname } = useRouter();
  const api = 'http://localhost:1337';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MOG PRODUCTS</h1>
      <Row className={styles.productsRow} justify='center' gutter={16}>
        {products.map((product) => (
          <Col key={product.id}>
            <Card
              className={styles.productsCard}
              bordered={false}
              cover={
                <img
                  style={{ width: '250px', height: '250px' }}
                  alt='product-img'
                  src={`${api}${product.image[0].url}`}
                />
              }
            >
              <Meta
                title={product.model}
                description={product.shortDescription}
              />
              <Link href={`${pathname}/${product.id}`}>
                <div>
                  <a> +info </a>
                </div>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const locale = ctx.locale;
  const api = `http://localhost:1337/products?_locale=${locale}`;
  const res = await fetch(`${api}`);
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default Products;
