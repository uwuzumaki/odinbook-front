import { useState, useEffect, use } from "react";
import { PageContext } from "../../contexts/PageContext";
import { SearchIcon } from "../../ui/Icons";

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
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="m-2 flex-2 rounded-lg bg-slate-200 p-2 hover:border-slate-700"
          onChange={handleChange}
          value={input}
          placeholder="Search for Usernames or Display Names"
        />
        <button
          className="m-2 rounded-lg p-2 text-slate-700 hover:cursor-pointer hover:bg-slate-200"
          type="submit"
        >
          Search
        </button>
      </form>
      <div>results here</div>
    </>
  );
};

export default Search;
