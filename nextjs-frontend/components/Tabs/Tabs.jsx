import {Tabs} from "antd";
import CardItem from "../Cards/CardItem";
import styles from "./Tabs.module.css";

const {TabPane} = Tabs;

const Filter = () => {
  return (
    <Tabs defaultActiveKey="1" centered className={styles.tabs}>
      <TabPane tab="Video Cloud Services" key="1" className={styles.tabPanel}>
        <CardItem
          icon={
            <svg
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.5682 3.78906H5.31356C3.84624 3.78906 2.65674 4.92001 2.65674 6.3151V18.9453C2.65674 20.3404 3.84624 21.4714 5.31356 21.4714H26.5682C28.0355 21.4714 29.225 20.3404 29.225 18.9453V6.3151C29.225 4.92001 28.0355 3.78906 26.5682 3.78906Z"
                stroke="#006AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6274 26.5234H21.2547"
                stroke="#006AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.9409 21.4713V26.5234"
                stroke="#006AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          title="OTT-TV  Platform"
          description={
            <span>
              With <a href="">Vizzi</a> is easy to launch your all-in-one video
              platform, from acquisition to distribution, with no loose ends.
              Start monetizing your content, today.
            </span>
          }
        />

        <CardItem
          icon={
            <svg
              width="32"
              height="23"
              viewBox="0 0 32 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.1837 8.81033H22.466C21.9559 6.95745 20.902 5.2759 19.424 3.95677C17.946 2.63764 16.1032 1.73382 14.1049 1.348C12.1067 0.962192 10.0331 1.10986 8.11983 1.77423C6.20656 2.43859 4.53033 3.59302 3.28159 5.10633C2.03286 6.61965 1.26169 8.43116 1.05573 10.335C0.84976 12.2389 1.21725 14.1588 2.11644 15.8766C3.01563 17.5943 4.41047 19.0411 6.14245 20.0524C7.87443 21.0637 9.87411 21.5991 11.9143 21.5977H24.1837C25.9915 21.5977 27.7252 20.924 29.0035 19.725C30.2819 18.526 31 16.8997 31 15.204C31 13.5083 30.2819 11.882 29.0035 10.683C27.7252 9.48395 25.9915 8.81033 24.1837 8.81033Z"
                stroke="#2F75EC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          title="Cloud Media Production"
          description={
            <span>
              Manage and execute all your media operations with{" "}
              <a href="">MAM4PRO</a> , a powerful and scalable sofware, fully
              deployable on your premises, or the Cloud.
            </span>
          }
        />

        <CardItem
          icon={
            <svg
              width="39"
              height="31"
              viewBox="0 0 39 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.1388 15.1562H3.19434"
                stroke="#006AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.70475 6.45408L3.19434 15.1563V22.7344C3.19434 23.4044 3.53089 24.0469 4.12997 24.5206C4.72904 24.9943 5.54156 25.2605 6.38878 25.2605H31.9443C32.7916 25.2605 33.6041 24.9943 34.2031 24.5206C34.8022 24.0469 35.1388 23.4044 35.1388 22.7344V15.1563L29.6284 6.45408C29.3639 6.03322 28.9562 5.67905 28.4511 5.43138C27.9461 5.18372 27.3636 5.05237 26.7693 5.05212H11.5638C10.9695 5.05237 10.387 5.18372 9.88198 5.43138C9.3769 5.67905 8.96922 6.03322 8.70475 6.45408V6.45408Z"
                stroke="#006AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5835 20.2084H9.59947"
                stroke="#006AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.9722 20.2084H15.9881"
                stroke="#006AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          title="Private Cloud Media Farm"
          description={`Boosted IT servers (COTS) that can fully support HD/FHD/HD/SD video formats for media for dozens of media operations.`}
        />
      </TabPane>
      <TabPane tab="Video Software" key="2"></TabPane>
    </Tabs>
  );
};
export default Filter;
