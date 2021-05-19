import "antd/dist/antd.css";
import { Card, Badge } from "antd";
import styles from "./CardHighlight";

const CardHorizontal = (props) => {
  return (
    <div className="wrapper">
      <Card
        className="cardHorizontal"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "550px",
          height: "auto",
        }}
        cover={<img alt="card-highlight-img" src={props.image} />}
      >
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Read More</p>
      </Card>
    </div>
  );
};

export default CardHorizontal;
