import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./Button.module.css";

const Btn = (props) => {
  return (
    <Button
      ghost
      className={styles.btn}
      style={{
        border: `1px solid ${props.border}`,
        color: `${props.color}`,
        marginTop: `${props.marginTop}`,
      }}
    >
      {props.children}
      <svg
        width="7"
        height="13"
        viewBox="0 0 7 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: "16px" }}
      >
        <path
          d="M1 12L6 6.5L1 1"
          stroke={props.btnIconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};

export default Btn;
