import { use } from "react";
import { PageContext } from "../../contexts/PageContext";

const HeaderBar = () => {
  const title = use(PageContext);

  return <div className="border">{title.pageTitle}</div>;
};

export default HeaderBar;
