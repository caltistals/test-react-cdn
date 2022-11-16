import Child from "./components.js";
const useState = React.useState;
// const useEffect = React.useEffect;

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div className="wow">
      <p>react CDN</p>
      <p>count: {count}</p>
      <button onClick={increment}>count up</button>
      <Child />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
