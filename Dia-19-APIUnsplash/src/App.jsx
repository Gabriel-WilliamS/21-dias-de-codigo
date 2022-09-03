import { useEffect, useState } from "react";
const clientID = `?client_id=${import.meta.env.VITE_API_ACCESS_KEY}`;
const mainUrl = "https://api.unsplash.com/photos/";
const searchUrl = "https://api.unsplash.com/search/photos/";

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });

    return () => window.removeEventListener("scroll", event);
  }, []);

  async function fetchImages() {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPage(1);
  }
  return (
    <>
      <header className="w-full h-[30rem] bg-[url('https://source.unsplash.com/random?a=1')] bg-cover bg-center flex justify-center items-center">
        <form className="w-80 md:w-[30rem] lg:w-[40rem] h-72 px-10 rounded-md drop-shadow-xl bg-white/30 backdrop-blur-sm flex flex-col justify-center items-center gap-10 ">
          <h1 className="text-4xl text-black/90 font-bold tracking-wider text-center">
            Image gallery with
            <br />
            unsplash API
          </h1>
          <div className="flex gap-10">
            <input
              className="w-40 lg:w-full p-4 rounded-md  "
              type="text"
              placeholder="Search Image"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="w-20 lg:w-40	 p-4 bg-slate-600 text-white rounded-md hover:bg-slate-700 duration-500"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </form>
      </header>

      <main className="columns-1 md:columns-2 lg:columns-3  p-4 lg:p-9  ">
        {photos.map((image, index) => (
          <div
            className="rounded-3xl overflow-hidden mb-4 drop-shadow-xl"
            key={index}
          >
            <img src={image.urls.regular} alt="Image" />
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
