const followerRequests = () => {
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
