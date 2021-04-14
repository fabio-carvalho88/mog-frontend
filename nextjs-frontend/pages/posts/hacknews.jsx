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
                                <p className={styles.text}>
                                    {story.title} - <label>{story.by}</label>
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
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    const data = await res.json();
    // Get the top 5 from the response
    const topFive = data.slice(0, 5);

    const dataTopFive = await Promise.all(topFive.map(async elem => {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${elem}.json?print=pretty`);
        const data = await res.json();
        console.log(data);
        // topFiveArray.push(data);
        return data;
    }));


    return {
        props: { stories: dataTopFive }
    }
}

export default Stories

