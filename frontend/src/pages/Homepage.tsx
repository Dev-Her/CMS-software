import { FaUser, FaLock } from "react-icons/fa";

function HomePage() {
  return (
    <div className="Homepage">
      <div className="login__screen">
        <div className="login__titles">
          <h1 className="login__title">Welcome back to Pulse !</h1>
          <p className="login__subtitle">
            Sign in to your account to continue managing your business.
          </p>
        </div>
        <form className="form__contact">
          <div className="input__box">
            <label htmlFor="username">Username</label>
            <div className="input__control">
              <input
                id="username"
                name="username"
                type="text"
                className="login__username"
                autoComplete="username"
              />
              <FaUser className="login__icon" aria-hidden="true" />
            </div>
          </div>

          <div className="input__box">
            <label htmlFor="password">Password</label>
            <div className="input__control">
              <input
                id="password"
                name="password"
                type="password"
                className="login__password"
                autoComplete="current-password"
              />
              <FaLock className="login__icon" aria-hidden="true" />
            </div>
          </div>
          <div className="remember__forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login__btn">
            Sign in
          </button>
          <div className="new__account">
            <p>
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>

          <p className="login__divider">or</p>

          <div className="social__icons">
            <button className="google" type="button">
              <i className="fa-brands fa-google"></i>Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
