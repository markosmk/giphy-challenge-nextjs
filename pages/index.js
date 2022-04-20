import { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import { getGifs } from '../utils/getData';
import Gif from '../components/Gif';

export async function getServerSideProps() {
  const result = await getGifs();
  // console.log(gifs);
  const gifs = result ? result : [];
  return {
    props: {
      gifs,
    },
  };
}

export default function Home({ gifs }) {
  // console.log(gifs);
  const [query, setQuerySearch] = useState('');
  const [results, setResult] = useState(gifs || []);
  // console.log(results);

  useEffect(() => {
    if (query) {
      const getData = async () => {
        const gifs = await getGifs('search', query);
        setResult(gifs);
      };
      getData();
    }
  }, [query]);

  return (
    <>
      <div className="h-full p-4">
        <h1 className="text-2xl text-center my-2 font-bold text-sky-500">
          App Giphy Challenge
        </h1>
        <SearchBox setQuerySearch={setQuerySearch} />
        {/* <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
        <ul className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {results &&
            results.map((item, idx) => {
              return <Gif key={item.id + idx} {...item} />;
            })}
        </ul>
      </div>
    </>
  );
}
