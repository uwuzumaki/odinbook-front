import { useEffect, use } from "react";
import { PageContext } from "../../contexts/PageContext";

const followerRequests = () => {
  const title = use(PageContext);

  useEffect(() => {
    title.setPageTitle("Follower Requests");
  });

  return (
    <>
      <div className="flex flex-col items-start">
        <div className="flex w-full">
          <div>image</div>
          <div className="flex flex-2 items-start">
            <div>displayname</div>
            <div>username</div>
          </div>
          <div className="flex">
            <div>Accept</div>
            <div>Decline</div>
          </div>
        </div>
        <div>description</div>
      </div>
    </>
  );
};

export default followerRequests;
