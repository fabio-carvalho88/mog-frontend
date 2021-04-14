import Link from 'next/link'
import styles from '../../styles/Home.module.css'


const Quotes = ({ quotes }) => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Kanye Rest - The Best API ever</h1>
                <h5>
                    <Link href="/">
                        <a>Back to Homepage</a>
                    </Link>
                </h5>
                <div>

                </div>
                <p className={styles.text}>{quotes.quote}</p>
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const api = 'https://api.kanye.rest/'
    const res = await fetch(`${api}`);
    const data = await res.json();
    return {
        props: { quotes: data }
    }
}

export default Quotes
