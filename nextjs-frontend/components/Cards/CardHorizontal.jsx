import 'antd/dist/antd.css';
import { Card, Badge } from 'antd';

const CardHorizontal = (props) => {
  return (
    <div
      className='wrapper'
      style={{
        marginTop: `${props.marginTop}`,
      }}
    >
      <Card
        className='cardHorizontal'
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          borderRadius: '8px',
        }}
        cover={
          <img
            alt='card-highlight-img'
            src={props.image}
            style={{
              height: '250px',
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px',
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          />
        }
      >
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Read More</p>
      </Card>
    </div>
  );
};

export default CardHorizontal;
