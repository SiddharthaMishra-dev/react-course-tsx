import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import DATA from "../data";
import { useEffect, useState } from "react";

// type courseProp = {
//   course: (typeof DATA)[number];
// };
type courseProp = (typeof DATA)[number];

const CourseId = () => {
  const params = useParams();
  const [course, setCourse] = useState<courseProp | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCourse = (id: string) => {
    setLoading(true);
    setTimeout(() => {
      setCourse(() => {
        let temp = DATA.filter((course) => {
          return course.id === Number(id);
        });
        return temp.length > 0 ? temp[0] : null;
      });
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchCourse(params.course!);
  }, [params.course]);

  return (
    <div className="h-full p-10 md:p-20">
      {loading === true ? (
        <div className="flex h-full w-full justify-center items-center">
          <BounceLoader color="orange" />
        </div>
      ) : (
        <div className="h-full w-full">
          <h3 className="text-4xl sm:text-6xl font-bold text-gray-900 text-center">
            {course?.name}
          </h3>
          <div className="mt-4 flex flex-col gap-y-5">
            <img
              src={course?.thumbnail}
              alt="course"
              className="w-full mx-auto sm:max-w-lg"
            />
            <div className="mt-2 text-2xl tracking-wide">{course?.description}</div>
            <div className="">
              <span className="font-semibold text-gray-800 text-lg">Instructor</span> -{" "}
              <span className="text-lg tracking-wide">{course?.instructor}</span>
            </div>
            <div className="">
              <span className="font-semibold text-gray-800 text-lg">Duration</span> -{" "}
              <span className="text-lg tracking-wide">{course?.duration}</span>
            </div>
            <div className="">
              <span className="font-semibold text-gray-800 text-lg">Schedule</span> -{" "}
              <span className="text-lg tracking-wide">{course?.schedule}</span>
            </div>
            <div className="">
              <span className="font-semibold text-gray-800 text-lg">Pre requisites -</span>
              <span>
                <ol className="ml-4 flex flex-col list-decimal gap-y-2 mt-2">
                  {course?.prerequisites?.map((req: string) => (
                    <li
                      key={req}
                      className="text-lg tracking-wide list-item"
                    >
                      {" "}
                      {req}
                    </li>
                  ))}
                </ol>
              </span>
            </div>
            <button className=" bg-green-400 p-2 rounded-md hover:bg-green-500 transition w-full max-w-lg mx-auto">
              <span className="text-2xl font-semibold">Enroll Now</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseId;
