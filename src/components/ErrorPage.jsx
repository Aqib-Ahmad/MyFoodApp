import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const err = useRouteError();
  console.log(err, "err");

  return (
    <div>
      <h1>Oops!!</h1>
      <p>{err.statusText}</p>
      <h3>{err.status}</h3>
    </div>
  );
};

export default ErrorPage;
