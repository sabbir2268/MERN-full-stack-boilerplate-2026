import { useState } from "react";
import { AuthContext } from "./authContext.jsx";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const value = {
    user,
    setUser,
    loading,
    setLoading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider };
