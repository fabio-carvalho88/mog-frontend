import {Card, Row, Col} from "antd";
import styles from "./CardTestimonials.module.css";

const CardTestimonials = (props) => {
  return (
    <Row gutter={[16]} className={styles.testimonialCard}>
      <Col flex="none" className={styles.testimonialLogo}>
        <div className={styles.testimonialBgLogo}>
          <img src="/NBC_logo.png"></img>
        </div>
      </Col>
      <Col flex="auto" className={styles.testimonialInfo}>
        <h4>{props.name}</h4>
        <p>{props.role}</p>
      </Col>
    </Row>
  );
};

export default CardTestimonials;
