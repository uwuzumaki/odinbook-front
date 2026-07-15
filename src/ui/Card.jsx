const Card = ({ post }) => {
  return (
    <div className="-mx-px -mt-px border border-gray-200 p-4 hover:cursor-pointer hover:bg-slate-50">
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-4">{post.postAuthor.displayName}</div>
          <div>@{post.postAuthor.username}</div>
        </div>
        <div>{post.createdAt}</div>
      </div>
      <div className="mt-4 flex">{post.content}</div>
      <div>Image</div>
      <div className="flex">
        <div>likes {post.like.length}</div>
        <div>comments {post.comments.length}</div>
      </div>
    </div>
  );
};

export default Card;
