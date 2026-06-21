import { use } from "react";
import { PageContext } from "../../contexts/PageContext";

const HeaderBar = () => {
  const title = use(PageContext);

  return (
    <div className="border border-gray-200">
      <div className="m-4">{title.pageTitle}</div>
    </div>
  );
};

export default HeaderBar;
