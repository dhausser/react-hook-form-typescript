import useForm from "react-hook-form";
import ErrorMessage from "./errorMessage";

function App() {
  const { register, handleSubmit, errors, setErrors, clearErrors, formState: { isSubmitting } }
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const validateUserName = async value => {
    await sleep(1000);
    if (value !== "bill") {
      setError("username", "validate");
    } else {
      clearError("username");
    }
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input name="firstName" ref={register({ required: true })} />

      <label>Last Name:</label>
      <input name="lastName" ref={register({ required: true })} />

      <label>Gender</label>
      <select name="gender" ref={register({ required: true })}>
        <option>Select...</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <label>Username</label>
      <input 
        name="username"
        onBlur={e => validateUserName(e.target.value)}
        ref={register({ required: true, validate: validateUserName })}  
      />

      <label>Email</label>
      <input name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })}/>

      <label>Age</label>
      <input
        name="age"
        type="number"
        ref={register({ required: true, min: 18 })}
      />

      <label>About you</label>
      <textarea name="about you" ref={register} />

      <input disabled={isSubmitting} type="submit" />
    </form>
  );
}

export default App;
