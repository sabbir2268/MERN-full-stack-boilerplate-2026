import { Button } from "../../../components/ui/Buttons";

function ButtonsPage() {
  return (
    <div className="space-y-6 text-foreground">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold">Buttons</h1>
        <p className="mt-2 text-muted">
          Reusable button components for the whole website.
        </p>
      </div>

      <div className="max-w-2xl grid gap-4 sm:grid-cols-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
      </div>
    </div>
  );
}

export default ButtonsPage;
