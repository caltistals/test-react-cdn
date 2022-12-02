const useState = React.useState;
const useEffect = React.useEffect;

const Search = () => {
  const [value, setValue] = useState("");
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <p>アルバムを検索</p>
      <p>(1-100の数字を入力するとアルバム情報を取得できます)</p>
      <form action="/result.html" method="get">
        <input value={value} name="value" onChange={handleValueChange} />
        <input type="submit" value="検索！" />
      </form>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Search />);
