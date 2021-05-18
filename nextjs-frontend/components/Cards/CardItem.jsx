import {Card} from "antd";
import styles from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <div className={styles.card}>
      <div>{props.icon}</div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.explore}>Explore</a>
    </div>
  );
};
export default CardItem;
