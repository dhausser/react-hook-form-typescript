import { FieldErrors } from "react-hook-form";

function ErrorMessage({ error }: FieldErrors) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>This is required</p>;
      case "minLength":
        return <p>Your last name need minmium 2 charcaters</p>;
      case "pattern":
        return <p>Enter a valid email address</p>;
      case "min":
        return <p>Minmium age is 18</p>;
      case "validate":
        return <p>Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
}

export { ErrorMessage };
