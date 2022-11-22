const useState = React.useState;
const useEffect = React.useEffect;

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [users, setUsers] = useState(null);
//   const increment = () => setCount((prev) => prev + 1);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       <div className="wow">
//         <p>react CDN</p>
//         <p>count: {count}</p>
//         <button onClick={increment}>count up</button>
//         <Child />
//       </div>
//       <div>
//         {isLoading && <p>Loading...</p>}
//         {users && users.map((user) => <User user={user} />)}
//       </div>
//     </>
//   );
// };

const Search = () => {
  const [value, setValue] = useState("");
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <p>アルバムを検索</p>
      <form action="/result.html" method="get">
        <input value={value} name="value" onChange={handleValueChange} />
        <input type="submit" value="検索！" />
      </form>
    </>
  );
};

// const User = (props) => {
//   const { user } = props;
//   return (
//     <div>
//       id: {user.id}, name: {user.name}, email: {user.email}
//     </div>
//   );
// };

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Search />);
