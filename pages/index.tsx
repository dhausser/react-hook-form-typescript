import { useForm } from "react-hook-form";
import { ErrorMessage } from "../components/errorMessage";

export interface FormInputs {
  firstName: string;
  lastName: string;
  gender: string;
  username: string;
  email: string;
  age: number;
  about: string;
}

function App() {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    formState: { isSubmitting },
  } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => {
    alert(JSON.stringify(data));
  };
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const validateUserName = async (value: string) => {
    await sleep(1000);
    if (value !== "bill") {
      setError("username", { types: { validate: true } });
      return true;
    }
    {
      clearErrors("username");
      return false;
    }
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input name="firstName" ref={register({ required: true })} />
      <ErrorMessage error={errors.firstName} />

      <label>Last Name:</label>
      <input name="lastName" ref={register({ required: true })} />
      <ErrorMessage error={errors.lastName} />

      <label>Gender</label>
      <select name="gender" ref={register({ required: true })}>
        <option>Select...</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <ErrorMessage error={errors.gender} />

      <label>Username</label>
      <input
        name="username"
        onBlur={(e) => validateUserName(e.target.value)}
        ref={register({ required: true, validate: validateUserName })}
      />
      <ErrorMessage error={errors.username} />

      <label>Email</label>
      <input
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <ErrorMessage error={errors.email} />

      <label>Age</label>
      <input
        name="age"
        type="number"
        ref={register({ required: true, min: 18 })}
      />
      <ErrorMessage error={errors.age} />

      <label>About you</label>
      <textarea name="about" ref={register} />

      <input disabled={isSubmitting} type="submit" />
    </form>
  );
}

export default App;
