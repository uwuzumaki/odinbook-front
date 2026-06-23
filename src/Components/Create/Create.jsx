import { useState, use, useEffect } from "react";
import { PageContext } from "../../contexts/PageContext";
import { FileIcon } from "../../ui/Icons";

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
      <form
        className="flex flex-col border-b border-gray-200"
        onSubmit={handleSubmit}
      >
        <textarea
          className="h-32 w-full resize-none p-2 focus:outline-none"
          onChange={handleChange}
          value={input}
          placeholder="What's on your mind?"
        />
        <div className="flex justify-between">
          <label
            className="m-2 rounded-3xl p-2 hover:cursor-pointer hover:bg-blue-200"
            htmlFor="file-upload"
          >
            <FileIcon />
          </label>
          <input type="file" id="file-upload" className="hidden" />
          <button
            className="m-2 rounded-4xl bg-blue-600 px-3 py-1 text-white hover:cursor-pointer hover:bg-blue-800"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
