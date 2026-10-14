import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the browser's default page reload
    console.log("Login data:", formData); // real API call comes in C4
  };

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-md border px-3 py-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full rounded-md border px-3 py-2"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        No account?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
