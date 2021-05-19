import 'antd/dist/antd.css';
import { Card, Badge } from 'antd';
import styles from './CardHighlight.module.css';

const CardHighlights = (props) => {
  return (
    <div className='wrapper'>
      <Card
        style={{ width: '550px', height: 'auto' }}
        cover={<img alt='card-highlight-img' src={props.image} />}
      />
      <div className={styles.cardContent}>
        <label className={styles.cardLabel}>{props.labelText}</label>
        <h4 className={styles.cardTitle}>{props.title}</h4>
      </div>
    </div>
  );
};

export default CardHighlights;
