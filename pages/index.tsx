import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

export interface FormInputs {
  firstName: string;
  lastName: string;
  gender: string;
  username: string;
  email: string;
  age: number;
  about: string;
}

function onSubmit(data: FormInputs) {
  alert(JSON.stringify(data));
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ mode: "onChange" });

  return (
    <>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>

        <label>First Name</label>
        <input {...register("firstName", { required: true, maxLength: 30 })} />
        {errors.firstName && errors.firstName.type === "required" && (
          <span>This is required</span>
        )}
        {errors.firstName && errors.firstName.type === "maxLength" && (
          <span>Max length exceeded</span>
        )}

        <label>Last Name</label>
        <input {...register("lastName", { required: true })} />
        {errors.lastName && errors.lastName.type === "required" && (
          <span>This is required</span>
        )}

        <label>Gender</label>
        <select {...register("gender", { required: true })}>
          <option>Select...</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        {errors.gender && errors.gender.type === "required" && (
          <span>This is required</span>
        )}

        <label>Username</label>
        <input
          {...register("username", {
            required: true,
          })}
        />
        {errors.username && errors.username.type === "required" && (
          <span>This is required</span>
        )}

        <label>Email</label>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && errors.email.type === "required" && (
          <span>This is required</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span>Please enter a valid email</span>
        )}

        <label>Age</label>
        <input
          type="number"
          {...register("age", { required: true, min: 18 })}
        />
        {errors.age && errors.age.type === "required" && (
          <span>This is required</span>
        )}
        {errors.age && errors.age.type === "min" && (
          <span>You must be over 18</span>
        )}

        <label>About you</label>
        <textarea {...register("about")} />

        <input disabled={isSubmitting} type="submit" />
      </form>
    </>
  );
}

export default App;
