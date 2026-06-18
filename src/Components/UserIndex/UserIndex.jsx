import { useEffect, use } from "react";
import User from "../../ui/User";
import { PageContext } from "../../contexts/PageContext";

const UserIndex = () => {
  const title = use(PageContext);

  useEffect(() => {
    title.setPageTitle("All Users");
  });

  return (
    <>
      <User />
    </>
  );
};

export default UserIndex;
