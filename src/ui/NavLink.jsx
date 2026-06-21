import { Link } from "react-router-dom";

const NavLink = ({ children, location }) => {
  return (
    <>
      <Link
        to={location}
        className="mt-4 mr-8 flex justify-center md:justify-start"
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;
