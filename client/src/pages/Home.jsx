import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold">Welcome to the MERN Boilerplate</h1>
      <p className="mx-auto mt-4 max-w-xl text-gray-600">
        A clean starting point with React, Express, MongoDB, and secure
        authentication. Clone it and start building.
      </p>
      <Link
        to="/register"
        className="mt-8 inline-block rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
      >
        Get Started
      </Link>
    </section>
  );
}

export default Home;
