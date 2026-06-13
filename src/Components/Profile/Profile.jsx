import { useParams } from "react-router-dom";
import Card from "../../ui/Card";

const Profile = () => {
  const { username } = useParams();

  return (
    <>
      <div className="flex flex-col items-start">
        <div>displayname</div>
        <div>username</div>
        <div className="flex">
          <div>followers</div>
          <div>following</div>
          <div>posts</div>
        </div>
        <div>description</div>
        <div className="mb-1 w-full min-w-90 sm:max-w-90 sm:min-w-146">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Profile;
