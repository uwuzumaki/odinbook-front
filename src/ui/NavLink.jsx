import { Link } from "react-router-dom";

const NavLink = ({ children, location }) => {
  return (
    <>
      <Link
        to={location}
        className="mt-4 mr-4 flex justify-center rounded-2xl p-1 sm:hover:bg-gray-200 md:justify-start lg:px-4"
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;
