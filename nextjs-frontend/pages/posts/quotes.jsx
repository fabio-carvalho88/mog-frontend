import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://api.kanye.rest/');
    const data = await res.json();
    console.log(data);
    return {
        props: { quotes: data }
    }
}

const Quotes = ({ quotes }) => {
    return (
        <>
            <div className="container">
                <h1>Kanye Rest - The Best API ever</h1>
                <h2>
                    <Link href="/">
                        <a>Back to Homepage</a>
                    </Link>
                </h2>
                <div>

                </div>
                <a>{quotes.quote}</a>
            </div>

        </>
    )
}

export default Quotes;

