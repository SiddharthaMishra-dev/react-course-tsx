import { useParams } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import Navbar from "../components/Navbar";

const EnrolledCourse = [
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    instructor: "John Doe", // Name of the course instructor
    description: "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In  Progress'
    thumbnail: "https://www.freecodecamp.org/news/content/images/2021/07/reactcourse.png", //Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content: "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
  },
  {
    id: 2, // Unique identifier for the course
    name: "Introduction to Python",
    instructor: "John Doe", // Name of the course instructor
    description: "Learn the basics of Python development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In  Progress'
    thumbnail: "https://www.freecodecamp.org/news/content/images/2021/07/reactcourse.png", //Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content: "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
  },
];

const Student = () => {
  const params = useParams();
  return (
    <>
      <Navbar />
      <div className="h-full p-10 md:p-20">
        <h2 className="text-2xl text-gray-900 font-bold text-center sm:text-4xl ">Welcome back</h2>
        <h3 className="text-xl text-gray-800 font-semibold text-center sm:text-2xl">
          <span className="text-orange-500">@</span>
          {params.studentId}
        </h3>
        <div className="h-full py-4 px-2">
          <div className="">
            <div className="w-full xl:w-4/5">
              <div className="bg-neutral-100 py-4 px-2 rounded-md">
                <h3 className="text-xl font-semibold text-gray-600">Your courses</h3>
              </div>
              <div className="flex flex-col gap-y-10 mt-4  ">
                {EnrolledCourse.map((course) => {
                  return (
                    <div className=" flex flex-col gap-y-2 lg:flex-row lg:gap-x-5 ">
                      <img
                        src={course.thumbnail}
                        alt="course"
                        className="w-full sm:max-w-md"
                      />
                      <div className="flex flex-col gap-y-2 w-full">
                        <h4 className="text-lg font-semibold text-gray-600">{course.name}</h4>
                        <p className="text-base text-gray-600">{course.description}</p>
                        <p className="text-base text-gray-600">{course.instructor}</p>
                        <button className="w-fit p-3 bg-red-100 rounded-md text-gray-800 font-semibold">
                          Due today
                        </button>
                        <div className="mt-auto">
                          <p className="text-base text-gray-600 mb-2">Completed</p>
                          <ProgressBar
                            completed={40}
                            bgColor="orange"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
