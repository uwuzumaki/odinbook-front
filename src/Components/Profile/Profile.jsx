import { use, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      <div className="flex flex-col items-start">
        <div>displayname</div>
        <div>username</div>
        <div className="flex">
          <div>followers</div>
          <div>following</div>
          <div>posts</div>
          <div>Follow requests</div>
        </div>
        <div>description</div>
        <div className="mb-1 w-full min-w-90 sm:max-w-146 sm:min-w-90">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Profile;
