import { useState } from "react";

// Search for username then displayname and display both
// Loading skeletons for when grabbing data
const Search = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    //submit to backend
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Search</label>
        <input onChange={handleChange} value={input} />
        <button type="submit">123</button>
      </form>
    </>
  );
};

export default Search;
