import DATA from "../data";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

type courseProp = {
  course: (typeof DATA)[number];
};

const CourseItem = ({ course }: courseProp) => {
  return (
    <div
      className=" bg-slate-200 mt-10 ml-4 rounded-md overflow-hidden"
      key={course.id}
    >
      <img
        src={course.thumbnail}
        alt=""
        className=""
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{course.name}</h3>
        <p className="text-lg ">{course.description}</p>
        <div className="mt-3 flex flex-col">
          <div className="flex bg-red-50 p-2 rounded-md text-slate-700 hover:bg-red-100 transition">
            <Clock />
            <span className="ml-2">{course.schedule}</span>
          </div>
          <div className="mt-3 flex justify-between">
            <button className="bg-slate-100 p-2  rounded-md">
              <Link to={`/courses/${course.id}`}>View Details</Link>
            </button>
            <button className=" bg-green-200 p-2 rounded-md hover:bg-green-300 transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
