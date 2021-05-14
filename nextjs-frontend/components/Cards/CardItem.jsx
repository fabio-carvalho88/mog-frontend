import {Card, Col, Row} from "antd";
import {useRouter} from "next/router";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const CardItem = () => {
  return (
    <Card>
      <h4>OTT-TV Platform</h4>
      <p>
        With Vizzi is easy to launch your all-in-one video platform, from
        acquisition to distribution, with no loose ends. Start monetizing your
        content, today.
      </p>
      <a href="">Read More</a>
    </Card>
  );
};
export default CardItem;
