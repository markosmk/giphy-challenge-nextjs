import { useState } from 'react';
import IconSearch from './icons/IconSearch';

function SearchBox({ setQuerySearch }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuerySearch(search);
  };

  return (
    <div className="block my-6 max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <IconSearch className="w-6 h-6 absolute left-4 top-2 text-slate-300" />
          <input
            type="text"
            id="search"
            placeholder="Buscar Gifs"
            className="w-full py-2 pl-12 pr-4 rounded-md bg-slate-100 focus:outline-none focus:bg-white border-2 border-slate-300 focus:border-sky-500 transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
