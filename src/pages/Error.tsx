import { useRouteError, Link, isRouteErrorResponse } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Error() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="font-semibold text-9x text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we could not find the page you are looking for.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary">
              <Link to="/"> Go Back Home</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-4xl font-bold text-center">There was an error...</h4>
    </main>
  );
}
export default Error;
