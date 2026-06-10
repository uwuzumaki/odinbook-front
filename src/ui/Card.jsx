const Card = () => {
  return (
    <div className="mb-1 rounded-2xl border p-4">
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-4">displayname</div>
          <div>@username</div>
        </div>
        <div>date</div>
      </div>
      <div className="mt-4 flex">content</div>
      <div>Image</div>
      <div className="flex">
        <div>likes</div>
        <div>comments</div>
      </div>
    </div>
  );
};

export default Card;
