import 'antd/dist/antd.css';
import { Card, Badge } from 'antd';
import styles from './CardHighlight.module.css';

const CardHighlight = (props) => {
  return (
    <div className={styles.wrapper}>
      <Card
        className={styles.cardHighlight}
        style={{
          // width: `${props.width}`,
          // height: `${props.height}`,
          borderRadius: '8px',
        }}
        bodyStyle={{ padding: 0 }}
      >
        <img
          className={styles.cardHighlightImage}
          src={props.image}
          alt=''
          style={{
            width: '100%',
            height: `${props.height}`,
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </Card>
      <div
        className={styles.cardContent}
        style={{
          width: `${props.contentWidth}`,
          paddingLeft: `${props.contentPaddingLeft}`,
          bottom: `${props.contentBottom}`,
        }}
      >
        <label className={styles.cardLabel}>{props.labelText}</label>
        <h4
          className={styles.cardTitle}
          style={{ fontSize: `${props.titleFontSize}` }}
        >
          {props.title}
        </h4>
      </div>
    </div>
  );
};

export default CardHighlight;
