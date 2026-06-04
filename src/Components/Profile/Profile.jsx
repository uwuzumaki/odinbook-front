import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();

  return (
    <div>
      <div>profile</div>
    </div>
  );
};

export default Profile;
