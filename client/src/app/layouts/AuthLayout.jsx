import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto w-full max-w-md px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
