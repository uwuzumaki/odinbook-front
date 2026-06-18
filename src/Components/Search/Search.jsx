import { useState, useEffect, use } from "react";
import { PageContext } from "../../contexts/PageContext";

// Search for username then displayname and display both
// Loading skeletons for when grabbing data
// bsky layout
const Search = () => {
  const [input, setInput] = useState("");
  const title = use(PageContext);

  useEffect(() => {
    title.setPageTitle("Search");
  });

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
      <div>results here</div>
    </>
  );
};

export default Search;
