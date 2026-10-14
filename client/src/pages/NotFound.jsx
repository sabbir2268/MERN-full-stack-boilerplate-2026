import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="mt-4 text-gray-600">This page doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
