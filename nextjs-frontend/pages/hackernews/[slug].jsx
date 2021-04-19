import { Card, Col, Row, Badge } from 'antd';
import styles from '../../styles/Home.module.css';

const Story = ({ storyData }) => {
  return (
    <div className={styles.cardContainer}>
      <Row>
        <Col className={styles.cardColumn}>
          <Card
            className={styles.storyCard}
            title={storyData.title}
            bordered={false}
          >
            <div className={styles.storyDescription}>
              <p>
                From: {storyData.by}
                <Badge
                  className={styles.scoreBadge}
                  count={storyData.score}
                  style={{ background: getBadgeScore(storyData.score) }}
                />
              </p>
              <a target='_blank' href={storyData.url}>
                View full story
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

function getBadgeScore(score) {
  let color;
  if (score < 25) {
    color = '#B6371C';
  } else if (score >= 25 && score <= 75) {
    color = '#F0E32C';
  } else if (score > 75) {
    color = '#44DA29';
  }

  return color;
}

export const getServerSideProps = async (context) => {
  const api = 'https://hacker-news.firebaseio.com/v0/item';
  const storyId = context.query.slug;

  const res = await fetch(`${api}/${storyId}.json`);
  const storyData = await res.json();
  return {
    props: {
      storyData,
    },
  };
};

export default Story;
