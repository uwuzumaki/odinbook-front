import Comment from "../../ui/Comment";

const PostPage = () => {
  return (
    <>
      <div className="flex flex-col items-start">
        <div className="flex">
          <div>profile</div>
          <div>
            <div>Displayname</div>
            <div>Username</div>
          </div>
        </div>
        <div>content</div>
        <div>image</div>
        <div className="flex">
          <div>time</div>
          <div>date</div>
        </div>
        <div className="flex">
          <div>Comments</div>
          <div>Likes</div>
        </div>
        <div>comment box</div>
        <Comment />
      </div>
    </>
  );
};

export default PostPage;
