import { useRouter } from 'next/router';

const Story = ({ storyData }) => {
  const { asPath } = useRouter();
  console.log(storyData.url);

  return (
    <div className='container'>
      <h1>{storyData.title}</h1>
      <p>From: {storyData.by}</p>
      <p>Score: {storyData.score}</p>
      <a target='_blank' href={storyData.url}>
        View full story
      </a>
    </div>
  );
};

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
