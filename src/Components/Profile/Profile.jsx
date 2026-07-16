import { use, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../../ui/Card";
import { PageContext } from "../../contexts/PageContext";

const Profile = () => {
  const { username } = useParams();
  const title = use(PageContext);

  useEffect(() => {
    title.setPageTitle(username);
  });

  return (
    <>
      <div className="flex flex-col items-start p-4">
        <div className="flex w-full justify-between">
          <div className="h-20 w-20 rounded-full border">image</div>
          <Link className="" to="/followerRequests">
            follower requests/Follow
          </Link>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start">
            <div className="text-2xl font-semibold">displayname</div>
            <div className="text-lg text-slate-500">username</div>
          </div>
        </div>
        <div className="my-2 flex">
          <div className="flex text-sm">
            <p className="font-semibold">Number</p>
            <p>followers</p>
          </div>
          <div className="flex text-sm">
            <p className="font-semibold">Number</p>
            <p>following</p>
          </div>
          <div className="flex text-sm">
            <p className="font-semibold">Number</p>
            <p>posts</p>
          </div>
        </div>
        <div>description</div>
      </div>
      <div className="mb-1 w-full min-w-90 sm:max-w-146 sm:min-w-90">
        placeholder
      </div>
    </>
  );
};

export default Profile;
