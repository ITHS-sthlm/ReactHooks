//Importing the useRouterError functionality
import { useRouteError } from "react-router-dom";

export default function Error() {
    //error variable is set to use the function
  const error = useRouteError();
  //We log the error in our log as well
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* Here we use the error variable together with some methods built in */}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
