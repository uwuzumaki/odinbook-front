import { useEffect, use } from "react";
import User from "../../ui/User";
import { PageContext } from "../../contexts/PageContext";

const Followers = () => {
  const title = use(PageContext);

  useEffect(() => {
    title.setPageTitle("Followers");
  });

  return (
    <>
      <User />
    </>
  );
};

export default Followers;
