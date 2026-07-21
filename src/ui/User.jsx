import { Link } from "react-router-dom";

const User = ({ data }) => {
  return (
    <>
      <Link
        to={`/u/${data.username}`}
        className="-mx-px -mt-px block border border-gray-200 p-4 hover:cursor-pointer hover:bg-slate-50"
      >
        <div className="flex">
          <div className="mr-4 h-12 w-12 rounded-full border">image</div>
          <div className="flex flex-2 flex-col items-start">
            <div className="-mb-1.5 font-semibold">{data.displayName}</div>
            <div className="text-sm text-slate-600">@{data.username}</div>
          </div>
          <div className="flex h-max items-center rounded-4xl bg-blue-600 px-4 py-1.5 text-white hover:cursor-pointer hover:bg-blue-800">
            Follow
          </div>
        </div>
        <div className="mt-2 flex justify-start">{data.bio}</div>
      </Link>
    </>
  );
};

export default User;
