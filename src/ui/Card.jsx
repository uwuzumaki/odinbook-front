import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    past: "%s",
    s: "%ds",
    m: "m",
    mm: "%dm",
    h: "h",
    hh: "%dh",
    d: "d",
    dd: "%dd",
  },
});

const Card = ({ post }) => {
  const [displayDate, setDisplayDate] = useState();

  useEffect(() => {
    const postDate = dayjs(post.createdAt);
    const timeDiff = dayjs().diff(postDate);

    if (timeDiff < 86400000) {
      setDisplayDate(postDate.fromNow()); //
    } else if (timeDiff < 259200000) {
      const days = Math.floor(timeDiff / 86400000);
      setDisplayDate(days + "d");
    } else {
      setDisplayDate(postDate.format("MMM D/YY"));
    }
  }, [post.createdAt]);

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
        <div className="text-gray-600">{displayDate}</div>
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
