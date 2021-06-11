import {Card} from "antd";
import styles from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <div>
      <Card className={styles.cardItem} style={{width: `${props.width}`}}>
        <div className={styles.iconSVG}>{props.icon}</div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.explore}>Explore</a>
      </Card>
    </div>
  );
};
export default CardItem;
