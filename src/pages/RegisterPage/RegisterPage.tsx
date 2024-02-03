import "./register.scss";

const RegisterPage = () => {
  return (
    <div className="register_wrap">
      <form className="form">
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input placeholder="" type="text" className="input" />
            <span>Firstname</span>
          </label>

          <label>
            <input placeholder="" type="text" className="input" />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input placeholder="" type="email" className="input" />
          <span>Email</span>
        </label>

        <label>
          <input placeholder="" type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input placeholder="" type="password" className="input" />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an acount ? <a href="#">Signin</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
