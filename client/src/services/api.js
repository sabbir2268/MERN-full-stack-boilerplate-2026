/**
 * Demo API service
 * -----------------
 * Thin wrapper around fetch with:
 * - base URL from VITE_API_URL env var
 * - automatic JSON parse / stringify
 * - default headers (Content-Type + optional Bearer token)
 * - small set of demo endpoints you can hit against a mock server
 *
 * Copy .env.example to .env and set VITE_API_URL to your backend.
 */

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

let token = null;

export const setAuthToken = (newToken) => {
  token = newToken;
};

export const clearAuthToken = () => {
  token = null;
};

const request = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const res = await fetch(url, {
    ...options,
    headers,
  });

  // Throw on non-ok so callers can use try/catch
  if (!res.ok) {
    const body = await res.text();
    const err = new Error(
      body ? `API error ${res.status}: ${body}` : `API error ${res.status}`
    );
    err.status = res.status;
    throw err;
  }

  // 204 No Content -> return null instead of parsing
  if (res.status === 204) return null;

  return res.json();
};

/* ------------------------------------------------------------------ */
/* Demo endpoints                                                     */
/* ------------------------------------------------------------------ */

// GET    /api/users
export const getUsers = () => request("/users");

// GET    /api/users/:id
export const getUser = (id) => request(`/users/${id}`);

// POST   /api/users
export const createUser = (data) =>
  request("/users", {
    method: "POST",
    body: JSON.stringify(data),
  });

// PUT    /api/users/:id
export const updateUser = (id, data) =>
  request(`/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

// DELETE /api/users/:id
export const deleteUser = (id) =>
  request(`/users/${id}`, { method: "DELETE" });

// GET    /api/posts
export const getPosts = () => request("/posts");

// GET    /api/posts/:id
export const getPost = (id) => request(`/posts/${id}`);

// POST   /api/posts
export const createPost = (data) =>
  request("/posts", {
    method: "POST",
    body: JSON.stringify(data),
  });

// Demo auth endpoints
export const login = (credentials) =>
  request("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

export const register = (userData) =>
  request("/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getPosts,
  getPost,
  createPost,
  login,
  register,
  setAuthToken,
  clearAuthToken,
};
