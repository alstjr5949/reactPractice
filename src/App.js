import { useState, useEffect } from "react";
import styles from "./Button.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button className={styles.btn} onClick={onClick}>
        Click me
      </button>
    </div>
  );
}

export default App;
