import { useState, use, useEffect } from "react";
import { PageContext } from "../../contexts/PageContext";
import { FileIcon } from "../../ui/Icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// after creating the post go to the post
// bsky layout

const Create = () => {
  const [input, setInput] = useState("");
  const title = use(PageContext);
  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_DEV_URL}/user/createPost`;

  useEffect(() => {
    title.setPageTitle("Create");
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { content: input };
    try {
      const res = await axios.post(url, data, { withCredentials: true });
      console.log(res.data);
      navigate(`/p/${res.data.id}`);
    } catch (err) {
      console.log(err);
    }
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
