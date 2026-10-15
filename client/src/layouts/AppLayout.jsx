import { Outlet } from "react-router-dom";
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
