import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[60px] bg-gray-100 static top-0 flex items-center p-2">
      <div className="">
        <p className="text-orange-500 font-bold w-fit p-2 text-xl">
          <Link to="/">Alemeno</Link>
        </p>
      </div>
      <div className="ms-auto flex gap-x-3">
        <Link
          to="/"
          className="font-semibold text-gray-700 hover:text-orange-500 transition-all"
        >
          Home
        </Link>
        <Link
          to="/courses"
          className="font-semibold text-gray-700 hover:text-orange-500 transition-all "
        >
          Courses
        </Link>
        <Link
          to="/dashboard/sid"
          className="font-semibold text-gray-700 hover:text-orange-500 transition-all "
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
