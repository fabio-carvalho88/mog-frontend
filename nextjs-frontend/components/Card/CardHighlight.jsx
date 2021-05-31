import 'antd/dist/antd.css';
import { Card, Badge } from 'antd';
import styles from './CardHighlight.module.css';

const CardHighlight = (props) => {
  return (
    <div className='wrapper'>
      <Card
        className='cardHighlight'
        style={{ width: '100%', height: '520px', borderRadius: '8px' }}
        bodyStyle={{ padding: 0 }}
      >
        <img
          src={props.image}
          alt=''
          style={{
            width: '100%',
            height: '520px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </Card>
      <div className={styles.cardContent}>
        <label className={styles.cardLabel}>{props.labelText}</label>
        <h4 className={styles.cardTitle}>{props.title}</h4>
      </div>
    </div>
  );
};

export default CardHighlight;
