import {Card} from "antd";
import styles from "./CardItemDark.module.css";

const CardItemDark = (props) => {
  return (
    <div className={styles.card}>
      <div>{props.icon}</div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {/* <a href={props.explore}>Explore</a> */}
    </div>
  );
};
export default CardItemDark;
