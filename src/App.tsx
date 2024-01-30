import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-6xl">
          Get your kid ready for world! <span className=" text-orange-500">Alemeno</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to Alemeno. Each course is tailored for kids after consulting with market leaders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link to="/courses">Browse courses</Link>
          {/* <button>Our quality promise &rarr; </button> */}
        </div>
      </div>
    </>
  );
}

export default App;
