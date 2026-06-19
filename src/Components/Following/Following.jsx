import { useEffect, use } from "react";
import User from "../../ui/User";
import { PageContext } from "../../contexts/PageContext";

const Following = () => {
  const title = use(PageContext);

  useEffect(() => {
    title.setPageTitle("Following");
  });

  return (
    <>
      <User />
    </>
  );
};

export default Following;
