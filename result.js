const useState = React.useState;
const useEffect = React.useEffect;

const Result = () => {
  const [album, setAlbum] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const url = new URL(window.location.href);
  const params = url.searchParams;

  useEffect(() => {
    setIsLoading(true);
    if (!params.get("value")) {
      setError("取得できませんでした");
      setIsLoading(false);
    } else {
      fetch(
        `https://jsonplaceholder.typicode.com/albums/${params.get("value")}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("error");
          }
          return response.json();
        })
        .then((data) => {
          setAlbum(data);
          setIsLoading(false);
          console.log(data);
        })
        .catch((error) => {
          setError("取得できませんでした");
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {album && <Album album={album} />}
      {error && <p>{error}</p>}
      <a href="/index.html">戻る</a>
    </div>
  );
};

const Album = ({ album }) => {
  return (
    <div>
      <img src="./img/entertainment_music.png" alt="album art" />
      <p>ID: {album.id}</p>
      <p>アルバム名: {album.title}</p>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Result />);
