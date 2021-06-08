import { Tabs } from 'antd';
import CardItem from '../Cards/CardItem';
import styles from './Tabs.module.css';
import Monitor from '../../assets/icons/Monitor';
import Cloud from '../../assets/icons/Cloud';
import Disk from '../../assets/icons/Disk';

const { TabPane } = Tabs;

const Filter = () => {
  return (
    <Tabs
      defaultActiveKey='1'
      centered
      className={styles.tabs}
      style={{ fontWeight: 'bold' }}
    >
      <TabPane
        tab={<span style={{ fontSize: '20px' }}>Video Cloud Services</span>}
        key='1'
        style={{ fontWeight: 'normal' }}
        className={styles.tabPanel}
      >
        <CardItem
          icon={<Monitor iconColor={'#006AFF'} className={styles.iconHover} />}
          title='OTT-TV  Platform'
          description={
            <span>
              With Vizzi is easy to launch your all-in-one video platform, from
              acquisition to distribution, with no loose ends. Start monetizing
              your content, today.
            </span>
          }
        />

        <CardItem
          icon={<Cloud iconColor={'#2F75EC'} className={styles.iconHover} />}
          title='Cloud Media Production'
          description={
            <span>
              Manage and execute all your media operations with MAM4PRO , a
              powerful and scalable sofware, fully deployable on your premises,
              or the Cloud.
            </span>
          }
        />

        <CardItem
          icon={<Disk iconColor={'#2F75EC'} className={styles.iconHover} />}
          title='Private Cloud Media Farm'
          description={`Boosted IT servers (COTS) that can fully support HD/FHD/HD/SD video formats for media for dozens of media operations.`}
        />
      </TabPane>
      <TabPane
        tab={<span style={{ fontSize: '20px' }}>Video Software</span>}
        key='2'
      >
        <CardItem
          icon={<Monitor iconColor={'#006AFF'} className={styles.iconHover} />}
          title='Private Cloud Media Farm'
          description={`Boosted IT servers (COTS) that can fully support HD/FHD/HD/SD video formats for media for dozens of media operations.`}
        />
      </TabPane>
    </Tabs>
  );
};
export default Filter;
