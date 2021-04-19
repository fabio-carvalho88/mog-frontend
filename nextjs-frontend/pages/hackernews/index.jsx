import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const Stories = ({ topStories }) => {
  const { pathname } = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hack News - Also The Best API ever</h1>
      <div>
        <h3 className={styles.text}>Top 5 Stories</h3>
        <div>
          {topStories.map((story) => (
            <Link key={story.id} href={`${pathname}/${story.id}`}>
              <a>
                <p className={styles.text}>
                  {story.title}{' '}
                  <label className={styles.author}>by: {story.by}</label>
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const api = 'https://hacker-news.firebaseio.com/v0';

  async function fetchTopStoriesIds() {
    const res = await fetch(`${api}/topstories.json`);
    const allTopStoriesIds = await res.json();
    // Get the top 5 ids from the response
    return allTopStoriesIds.slice(0, 5);
  }

  async function fetchTopStories() {
    const topStoriesIds = await fetchTopStoriesIds();
    return await Promise.all(
      topStoriesIds.map(async (storyId) => {
        const res = await fetch(`${api}/item/${storyId}.json`);
        return await res.json();
      })
    );
  }

  return {
    props: {
      topStories: await fetchTopStories(),
    },
  };
};

export default Stories;
