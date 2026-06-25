import { useEffect, use, useState } from "react";
import Comment from "../../ui/Comment";
import { PageContext } from "../../contexts/PageContext";
import { LikeIcon, CommentIcon } from "../../ui/Icons";

const PostPage = () => {
  const title = use(PageContext);
  const [commentBoxHidden, setCommentBoxHidden] = useState(true);

  useEffect(() => {
    title.setPageTitle("Post title maybe?");
  });

  const toggleCommentBox = () => {
    setCommentBoxHidden(!commentBoxHidden);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("123");
  };

  return (
    <>
      <div className="flex flex-col items-start p-4">
        <div className="flex">
          <div className="mr-2 h-12 w-12 rounded-full border">profile</div>
          <div className="flex flex-col items-start">
            <div className="font-semibold">Displayname</div>
            <div className="text-sm text-slate-600">Username</div>
          </div>
        </div>
        <div className="my-2 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet
          facilisis suscipit. Praesent felis massa, cursus sed ante nec,
          sagittis viverra ipsum. Ut commodo sagittis tincidunt. Proin et lectus
          at odio porta interdum nec id massa. Pellentesque non mattis ligula.
          Nunc tincidunt, massa sed mollis viverra, lacus enim blandit urna, in
          rutrum purus velit quis diam. Nulla quis sapien vitae nulla ornare
          egestas et ac mauris. Mauris nisl sapien, tempor in maximus quis,
          gravida facilisis risus.
        </div>
        <div>image</div>
        <div className="flex w-full border-b border-gray-200 pb-2 text-slate-600">
          <div className="mr-2">time</div>
          <div> - </div>
          <div className="ml-2">date</div>
        </div>
        <div className="flex w-full border-b border-gray-200 text-slate-600">
          <div className="mr-4 flex py-2">
            <div className="mr-1 font-semibold text-black">67</div>
            <div className="flex items-end text-sm">comments</div>
          </div>
          <div className="flex py-2">
            <div className="mr-1 font-semibold text-black">69</div>
            <div className="flex items-end text-sm">likes</div>
          </div>
        </div>
        <div className="flex pt-2">
          <div className="mr-8" onClick={toggleCommentBox}>
            <CommentIcon />
          </div>
          <LikeIcon />
        </div>
        <form
          className={`${commentBoxHidden ? "hidden" : "block"} flex w-full flex-col items-end`}
          onSubmit={handleSubmit}
        >
          <textarea className="h-32 w-full resize-none p-2 focus:outline-none" />
          <button
            className="rounded-4xl bg-blue-600 px-4 py-1 text-white hover:cursor-pointer hover:bg-blue-800"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
      <Comment />
      <Comment />
    </>
  );
};

export default PostPage;
