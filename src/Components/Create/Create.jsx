import { useState, use, useEffect } from "react";
import { PageContext } from "../../contexts/PageContext";

// after creating the post go to the post
// bsky layout

const Create = () => {
  const [input, setInput] = useState("");
  const title = use(PageContext);

  useEffect(() => {
    title.setPageTitle("Create");
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
        <label>create</label>
        <input onChange={handleChange} value={input} />
        {/* Replace input with an icon or something */}
        <input type="file" />
        <button type="submit">123</button>
      </form>
    </>
  );
};

export default Create;
