import { Layout, Row, Col, Image } from 'antd';
import styles from '../../styles/Home.module.css';

const Product = ({ productData }) => {
  const api = 'http://localhost:1337';
  // console.log('DATA:' + JSON.stringify(productData));
  console.log(productData.localizations);

  const { Content } = Layout;
  return (
    <Layout>
      <Content style={{ minHeight: '600px' }}>
        <Row style={{ marginTop: '1rem' }}>
          <Col span={12} offset={6}>
            <Image width={200} src={`${api}${productData.image[0].url}`} />
            <h2>{productData.model}</h2>
            <h5>{productData.family}</h5>
            <p>{productData.longDescription}</p>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const api = 'http://localhost:1337/products';
  const productId = ctx.query.slug;
  const res = await fetch(`${api}/${productId}`);
  const productData = await res.json();
  return {
    props: {
      productData,
    },
  };
};

export default Product;
