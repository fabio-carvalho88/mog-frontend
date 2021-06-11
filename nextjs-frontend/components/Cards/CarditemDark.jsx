import {Card} from "antd";
import styles from "./CardItemDark.module.css";

const CardItemDark = (props) => {
  return (
    <div>
      <Card className={styles.card} style={{width: `${props.width}`}}>
        <div className={styles.iconSVG}>{props.icon}</div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.explore}>Read More</a>
      </Card>
    </div>
  );
};
export default CardItemDark;
