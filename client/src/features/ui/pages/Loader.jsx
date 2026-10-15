import { Loader } from "../../../components/ui/Loader";

function LoaderPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-foreground">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold">Loader</h1>
        <p className="mt-2 text-muted">
          Loading indicator component used across the app.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Loader />
          <p className="text-sm text-muted">Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default LoaderPage;
