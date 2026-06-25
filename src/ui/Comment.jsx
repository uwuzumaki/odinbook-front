const Comment = () => {
  return (
    <>
      <div className="-mx-px -mt-px flex border border-gray-200 p-4 hover:cursor-pointer hover:bg-slate-50">
        <div className="mr-2 h-10 w-10 rounded-full border">profile</div>
        <div className="flex w-full flex-col items-start">
          <div className="flex">
            <div className="mr-2 font-semibold">displayname</div>
            <div className="mr-2 text-slate-600">username</div>
            <div>-</div>
            <div className="ml-2 text-slate-600">time</div>
          </div>
          <div className="text-left text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            aliquet eget erat a porttitor. Aliquam volutpat ornare tortor sed
            mattis. Proin fermentum mauris in odio laoreet, ut convallis lectus
            semper. Sed non.{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
