// Displays all posts (potentially limited to 7 days)
import { useEffect, use } from "react";
import Card from "../../ui/Card";
import { PageContext } from "../../contexts/PageContext";

const Index = () => {
  const title = use(PageContext);

  useEffect(() => {
    title.setPageTitle("Home");
  });

  return (
    <>
      <Card />
      <Card />
    </>
  );
};

export default Index;
