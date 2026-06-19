import { use, useEffect } from "react";
import Card from "../../ui/Card";
import { PageContext } from "../../contexts/PageContext";

const Likes = () => {
  const title = use(PageContext);

  useEffect(() => {
    title.setPageTitle("Likes");
  });

  return (
    <>
      <Card />
    </>
  );
};

export default Likes;
