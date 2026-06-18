import { use, useEffect } from "react";
import Card from "../../ui/Card";
import { PageContext } from "../../contexts/PageContext";

const Likes = () => {
  const title = use(PageContext);

  useEffect(() => {
    title.setPageTile("Likes");
  });

  return (
    <>
      <Card />
    </>
  );
};

export default Likes;
