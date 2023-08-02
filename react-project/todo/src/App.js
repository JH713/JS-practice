import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState("");
 const [toDos, setToDos] = useState([]); 
  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
	if (value === ""){
		return;
	}
	setToDos(currentArray => [value, ...currentArray]);
	setValue("");
  };
  console .log(toDos);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
	  <hr />
	  <ul>
	 	 {toDos.map((item, index) => <li key={index}>{item}</li>)}
	  </ul>
    </div>
  );
}

export default App;
