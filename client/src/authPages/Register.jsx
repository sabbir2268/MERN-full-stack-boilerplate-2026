import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", formData); // real API call comes in C4
  };

  return (
    <div className="mx-auto max-w-md rounded-lg border bg-surface p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">Create an account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-line bg-surface px-3 py-2 text-foreground placeholder:text-muted"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-line bg-surface px-3 py-2 text-foreground placeholder:text-muted"
        />
        <input
          type="password"
          name="password"
          placeholder="Password (min 8 characters)"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={8}
          className="w-full rounded-md border border-line bg-surface px-3 py-2 text-foreground placeholder:text-muted"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-sm text-muted">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
