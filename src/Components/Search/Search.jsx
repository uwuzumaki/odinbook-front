import { useState, useEffect, use } from "react";
import axios from "axios";
import { PageContext } from "../../contexts/PageContext";
import { SearchIcon } from "../../ui/Icons";
import User from "../../ui/User";

// Search for username then displayname and display both
// Loading skeletons for when grabbing data
// bsky layout
const Search = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState(null);
  const [foundText, setFoundText] = useState("");
  const title = use(PageContext);

  useEffect(() => {
    title.setPageTitle("Search");
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsers(null);
    const url = `${import.meta.env.VITE_DEV_URL}/user/findUsers`;
    const data = { username: input };
    try {
      const res = await axios.post(url, data, { withCredentials: true });
      console.log(res.data);
      if (res.data == null) {
        setUsers(null);
        setFoundText("No users found");
      } else {
        setUsers(res.data);
        setFoundText("");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setInput("");
    }
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
      <div>
        {users ? (
          users.map((user) => <User key={user.id} data={user} />)
        ) : (
          <>{foundText}</>
        )}
      </div>
    </>
  );
};

export default Search;
