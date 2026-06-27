import { useEffect, use } from "react";
import { PageContext } from "../../contexts/PageContext";
import FollowerRequestUser from "../../ui/FollowerRequestUser";

const followerRequests = () => {
  const title = use(PageContext);

  useEffect(() => {
    title.setPageTitle("Follower Requests");
  });

  return (
    <>
      <FollowerRequestUser />
      <FollowerRequestUser />
    </>
  );
};

export default followerRequests;
