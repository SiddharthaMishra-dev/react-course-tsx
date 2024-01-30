import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./store.ts";
import { Provider } from "react-redux";
import Courses from "./Pages/Courses.tsx";
import CourseId from "./Pages/CourseId.tsx";
import Student from "./Pages/Student.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/courses/:course",
    element: <CourseId />,
  },
  {
    path: "/dashboard/:studentId",
    element: <Student />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="h-full min-h-screen w-full bg-slate-50">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
