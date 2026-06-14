import { useParams } from "react-router-dom";
import Card from "../../ui/Card";

const Profile = () => {
  const { username } = useParams();

  return (
    <>
      <div className="flex flex-col items-start">
        <div>displayname</div>
        <div className="flex w-full flex-row justify-between">
          <div>test</div>
          <div>test2</div>
        </div>
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
