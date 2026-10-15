const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

let token = null;

export const setAuthToken = (t) => { token = t; };
export const clearAuthToken = () => { token = null; };

const request = async (path, opts = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...opts.headers,
    },
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const getUsers = () => request("/users");
export const getUser = (id) => request(`/users/${id}`);
export const createUser = (d) => request("/users", { method: "POST", body: JSON.stringify(d) });
export const updateUser = (id, d) => request(`/users/${id}`, { method: "PUT", body: JSON.stringify(d) });
export const deleteUser = (id) => request(`/users/${id}`, { method: "DELETE" });

export const getPosts = () => request("/posts");
export const getPost = (id) => request(`/posts/${id}`);
export const createPost = (d) => request("/posts", { method: "POST", body: JSON.stringify(d) });

export const login = (c) => request("/auth/login", { method: "POST", body: JSON.stringify(c) });
export const register = (u) => request("/auth/register", { method: "POST", body: JSON.stringify(u) });

export default {
  getUsers, getUser, createUser, updateUser, deleteUser,
  getPosts, getPost, createPost,
  login, register,
  setAuthToken, clearAuthToken,
};
