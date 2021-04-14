import Link from 'next/link'
import styles from '../../styles/Home.module.css'


const Stories = ({ stories }) => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Hack News - Also The Best API ever</h1>
                <h2>
                    <Link href="/">
                        <a>Back to Homepage</a>
                    </Link>
                </h2>
                <div>
                    <h3 className={styles.text}>Top 5 Stories</h3>
                    <div>
                        {stories.map((story) => (
                            <>
                                <p className={styles.text} key={story.id}>
                                    {story.title} <label className={styles.author}>by: {story.by}</label>
                                </p>
                            </>

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const api = 'https://hacker-news.firebaseio.com/v0';
    const res = await fetch(`${api}/topstories.json`);
    const data = await res.json();
    // Get the top 5 from the response
    const topFive = data.slice(0, 5);

    const dataTopFive = await Promise.all(topFive.map(async elem => {
        const api = 'https://hacker-news.firebaseio.com/v0/item'
        const res = await fetch(`${api}/${elem}.json`);
        const data = await res.json();
        return data;
    }));

    return {
        props: { stories: dataTopFive }
    }
}

export default Stories

