import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {Button, Col, Divider, Row, Tooltip} from "antd";
// import {MailOutlined, PhoneOutlined} from "@ant-design/icons";
import styles from "./Footer.module.css";
import {SearchOutlined} from "@ant-design/icons";
import Phone from "../../assets/icons/Phone";
import Mail from "../../assets/icons/Mail";
import Facebook from "../../assets/icons/socialMedia/Facebook";
import LinkedIn from "../../assets/icons/socialMedia/LinkedIn";
import Instagram from "../../assets/icons/socialMedia/Instagram";
import Twitter from "../../assets/icons/socialMedia/Twitter";
import Youtube from "../../assets/icons/socialMedia/Youtube";
import Vimeo from "../../assets/icons/socialMedia/Vimeo";


const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <Row>
          <Col span={8} className={styles.contactsWrapper}>
            <div>
              <Image
                src="/logoMOG.png"
                alt="logo_MOG"
                width={137}
                height={80}
              />
            </div>
            <div className={styles.contacts}>
              <div className={styles.contactsEmail}>
                <Mail iconColor={"#006AFF"} />
                <p>sales@mog-technologies.com</p>
              </div>
              <div className={styles.contactsPhone}>
                <Phone iconColor={"#006AFF"} />
                <div className={styles.phoneNumbers}>
                  <p>US: +1 386-688-3295</p>
                  <p>EU: +351 220 187 493</p>
                </div>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <h5>Products</h5>
            <div className={styles.footerLinks}>
              <Link href="">Vizzi</Link>
              <Link href="">MAM4PRO</Link>
              <Link href="">mDeck</Link>
              <Link href="">mxfSPEEDRAIL</Link>
              <Link href="">xPRESS</Link>
              <Link href="">mediaLIBS</Link>
              <Link href="">Online Catalogue</Link>
            </div>
          </Col>
          <Col span={4}>
            <h5>Solutions</h5>
            <div className={styles.footerLinks}>
              <Link href="">Cloud Production</Link>
              <Link href="">SAS OTT-TV</Link>
              <Link href="">Media Workflows</Link>
              <Link href="">Media Appliances</Link>
              <Link href="">Studios</Link>
              <Link href="">Broadcast Systems</Link>
            </div>
          </Col>
          <Col span={4}>
            <h5>Company</h5>
            <div className={styles.footerLinks}>
              <Link href="">About</Link>
              <Link href="">Blog</Link>
              <Link href="">Careers</Link>
              <Link href="">Contact</Link>
              <Link href="">Financed Projects</Link>
            </div>
          </Col>
          <Col span={4}>
            <h5>Communities</h5>
            <div className={styles.footerLinks}>
              <Link href="">Customers</Link>
              <Link href="">Resellers</Link>
              <Link href="">Partners</Link>
              <Link href="">Success Stories</Link>
            </div>
          </Col>
        </Row>
        <Divider className={styles.divider} />
        <Row className={styles.footerSocialMedia}>
          <p>MOG Technologies Lda. All Rights Reserved, 2021</p>
          <div className={styles.socialMedia}>
            <p>Follow us</p>
            <Button
              className={styles.button}
              shape="circle"
              icon={<Facebook />}
            />
            <Button
              className={styles.button}
              shape="circle"
              icon={<LinkedIn />}
            />
            <Button
              className={styles.button}
              shape="circle"
              icon={<Instagram />}
            />
            <Button
              className={styles.button}
              shape="circle"
              icon={<Twitter />}
            />
            <Button
              className={styles.button}
              shape="circle"
              icon={<Youtube />}
            />
            <Button
              className={styles.button}
              shape="circle"
              icon={<Vimeo />}
            />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
