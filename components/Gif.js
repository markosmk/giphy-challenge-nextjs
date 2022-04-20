function Gif({ title, url, type, date }) {
  return (
    <li className="grid grid-rows-[1fr_auto] m-0 mb-4 bg-white p-2 [break-inside:avoid] rounded-md">
      <img src={url} alt={title} className="rounded-lg" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <div className="flex justify-between text-sm">
        <span>{type}</span>
        <span>{date}</span>
      </div>
    </li>
  );
}

export default Gif;
