import Child from "./components.js";
const useState = React.useState;
const useEffect = React.useEffect;

const App = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(null);
  const increment = () => setCount((prev) => prev + 1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="wow">
        <p>react CDN</p>
        <p>count: {count}</p>
        <button onClick={increment}>count up</button>
        <Child />
      </div>
      <div>
        {isLoading && <p>Loading...</p>}
        {users && users.map((user) => <User user={user} />)}
      </div>
    </>
  );
};

const User = (props) => {
  const { user } = props;
  return (
    <div>
      id: {user.id}, name: {user.name}, email: {user.email}
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
