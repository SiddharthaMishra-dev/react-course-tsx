import { useDispatch, useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";

import type { RootState } from "../store";
import { add } from "../coursesSlice";
import DATA from "../data";

import CourseItem from "../components/courseItem";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const Courses = () => {
  const courses = useSelector((state: RootState) => state.courses.value);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const fetchCourses = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(add(DATA));
      setLoading(false);
    }, 3000);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-full p-10 md:p-20">
        <h2 className="text-4xl font-bold text-center sm:text-6xl ">Courses we offer</h2>
        <div className="mt-8  min-h-96 h-full rounded-md">
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <div className="flex justify-center items-center">
                <BounceLoader color="orange" />
              </div>
            ) : courses === null ? (
              <div className="h-full w-full flex items-center justify-center">
                <h2 className="font-bold text-xl">No course available</h2>
              </div>
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
