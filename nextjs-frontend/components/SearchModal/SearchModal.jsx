import 'antd/dist/antd.css';
import { Modal, Input, Row, Col, Image, Card } from 'antd';

const SearchModal = (props) => {
  const { Search } = Input;
  const { Meta } = Card;

  return (
    <Modal
      title='Search'
      centered
      visible={props.visible}
      width={'100vw'}
      onOk={props.onOk}
      onCancel={props.onCancel}
      footer={[]}
    >
      <Row>
        <div style={{ margin: '100px auto', width: '50%' }}>
          <Search
            placeholder='input search text'
            allowClear
            enterButton='Search'
            size='large'
            // onSearch={onSearch}
          />
        </div>
      </Row>
      <Row gutter={16} style={{ justifyContent: 'center' }}>
        <Col>
          <Card
            hoverable
            style={{ width: 250 }}
            cover={
              <img
                alt='card-img'
                src='https://besthqwallpapers.com/Uploads/22-2-2020/122960/thumb-blue-neon-earth-neon-digital-technology-background-north-america-south-america-blue-neon-world-map.jpg'
              />
            }
          >
            <Meta
              title='MOG Technologies'
              description='www.mog-technologies.com'
            />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            style={{ width: 250 }}
            cover={
              <img
                alt='card-img'
                src='https://besthqwallpapers.com/Uploads/22-2-2020/122960/thumb-blue-neon-earth-neon-digital-technology-background-north-america-south-america-blue-neon-world-map.jpg'
              />
            }
          >
            <Meta
              title='MOG Technologies'
              description='www.mog-technologies.com'
            />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            style={{ width: 250 }}
            cover={
              <img
                alt='card-img'
                src='https://besthqwallpapers.com/Uploads/22-2-2020/122960/thumb-blue-neon-earth-neon-digital-technology-background-north-america-south-america-blue-neon-world-map.jpg'
              />
            }
          >
            <Meta
              title='MOG Technologies'
              description='www.mog-technologies.com'
            />
          </Card>
        </Col>
      </Row>
    </Modal>
  );
};

export default SearchModal;
