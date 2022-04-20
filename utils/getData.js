// base de ruta para requests
const API_URL = (page, query, limit, offset) => {
  return `https://api.giphy.com/v1/gifs/${page}?api_key=${
    process.env.NEXT_PUBLIC_GIPHY_KEY
  }&limit=15&rating=g&offset=0&lang=en${
    query && '&q=' + query
  }&limit=${limit}&offset=${offset}`;
};

// obtener por text en busqueda o trending
export const getGifs = async (page = 'trending', query = '', limit = 20, offset = 5) => {
  try {
    const url = API_URL(page, query, limit, offset);
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        url: item.images['480w_still'].url,
        type: item.type,
        date: item.import_datetime,
      };
    });
    return gifs;
  } catch (err) {
    console.log(err);
  }
};
