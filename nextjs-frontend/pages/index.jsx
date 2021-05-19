import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button, Row, Col } from "antd";
import CardHighlight from "../components/Card/CardHighlight";
import CardHorizontal from "../components/Card/CardHorizontal";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <main className={styles.header}>
        <h1
          className={styles.title}
          style={{ width: "750px", lineHeight: "1.5" }}
        >
          Transforming the way Content is{" "}
          <span className={styles.gradientText}>Created</span> in the Cloud.
        </h1>
        <p
          className={styles.description}
          style={{
            color: "#fff",
            paddingTop: "2rem",
            fontSize: "18px",
            fontFamily: "Inter",
          }}
        >
          From Unified Media Workflows to Virtualization, Cloud Services, OTT
          Platforms, and more.
        </p>
        <Button type="primary" size={"large"} style={{ marginTop: "1.5rem" }}>
          Find out how
        </Button>
      </main>
      <section class={styles.insights}>
        <div
          className="container"
          style={{
            display: "flex",
            margin: "50px 0",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "100px",
          }}
        >
          <h4>What's New?</h4>
          <h1>MOG Insights</h1>
          <p>Stay up to date with our latests news, articles and resources.</p>
          <Row gutter={[16, 16]}>
            <Col>
              <CardHighlight
                image={
                  "https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                }
                title="Scripted TV Productions can Afford no Downtime"
                labelText="White Paper"
              />
            </Col>
            <Col>
              <Row>
                <CardHorizontal
                  image={
                    "https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  }
                />
              </Row>
              <Row>
                <CardHorizontal
                  image={
                    "https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  }
                />
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
