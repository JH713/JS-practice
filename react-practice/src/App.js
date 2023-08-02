import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
	useEffect(()=>{
		console.log("created :)");
		return () => console.log("destroyed :(");
	},[]);
	return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClickShow = () => setShowing((prev) => !prev);

  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]);

  return (
    <div>
      <div>
		{showing? <Hello />: null}
        <button onClick={onClickShow}>{showing ? "Hide" : "Show"}</button>
	  </div>
      <div>
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here..."
        />
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
      </div>
      <div>
        <h1 className={styles.title}>Welcome back!</h1>
        <Button text={"Continue"} />
      </div>
    </div>
  );
}

export default App;
