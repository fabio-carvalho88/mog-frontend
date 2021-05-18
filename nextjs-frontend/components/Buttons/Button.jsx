import { RightOutlined } from "@ant-design/icons";
import {Button} from "antd";
import styles from "./Button.module.css";

const Btn = (props) => {
  return <Button className={styles.btn}>{props.children}<RightOutlined className={styles.icon}/></Button>;
};

export default Btn;
