import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <Link
      to={`/p/${post.id}`}
      className="-mx-px -mt-px block border border-gray-200 p-4 hover:cursor-pointer hover:bg-slate-50"
    >
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-1 h-8 w-8 rounded-full border">img</div>
          <div className="mr-2">{post.postAuthor.displayName}</div>
          <div className="text-gray-600">@{post.postAuthor.username}</div>
        </div>
        <div className="text-gray-600">{post.createdAt}</div>
      </div>
      <div className="mt-4 flex text-left">{post.content}</div>
      <div>Image</div>
      <div className="flex text-gray-600">
        <div className="text-sm">likes {post.like.length}</div>
        <div className="text-sm">comments {post.comments.length}</div>
      </div>
    </Link>
  );
};

export default Card;
