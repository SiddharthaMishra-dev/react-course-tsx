import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../store";
import { add } from "../coursesSlice";
import DATA from "../data";

import CourseItem from "../components/courseItem";
import Navbar from "../components/Navbar";

const Courses = () => {
  const courses = useSelector((state: RootState) => state.courses.value);

  const dispatch = useDispatch();

  const fetchCourses = () => {
    setTimeout(() => {
      dispatch(add(DATA));
    }, 3000);
  };
  fetchCourses();

  return (
    <>
      <Navbar />
      <div className="h-full p-10 md:p-20">
        <h2 className="text-4xl font-bold text-center sm:text-6xl ">Courses we offer</h2>
        <div className="mt-8  min-h-96 h-full rounded-md">
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {courses === null ? (
              <div>No course available</div>
            ) : (
              courses!.map((course) => {
                return (
                  <CourseItem
                    key={course.id}
                    course={course}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
