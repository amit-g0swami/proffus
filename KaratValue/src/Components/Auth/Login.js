import React, { useState, useEffect } from "react";
import "./Login.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import mailIcon from "../../images/mail.png";
import cross from "../../images/cross.png";
import eye from "../../images/eye.png";
import lock from "../../images/lock.png";
import Footer from ".././Component/Footer";
import { useAlert } from "react-alert";
import { userlogin } from "../../actions/auth";
import gold from "../../images/gold.jpeg";

function Login() {
  const history = useHistory();
  const alert = useAlert();
  const [email, setemail] = useState();
  const [password, setPassword] = useState();

  document.title = "Login";

  window.scrollTo(0, 0);

  const handleLogin = () => {
    if (!email || !password) {
      alert.error("Invalid email or password");
    } else {
      userlogin({ email, password }).then((data) => {
        if (data.error || !data) {
          alert.error(data.error);
        } else {
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(data));
          history.push("/");
          window.location.reload(true);
          alert.success("Logged in successfully");
        }
      });
    }
  };

  return (
    <>
      <div className="container" style={{ marginTop: "180px" }}>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="form">
              <h2 className="profile-heading mb-4">Login</h2>
              <form>
                <div className="profile-row">
                  <div className="input">
                    <input
                      placeholder="Email"
                      type="email"
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>
                  <div className="input">
                    <input
                      placeholder="New Password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>
                </div>
              </form>
              <div className="profile-row btn">
                <button className="save" onClick={handleLogin}>
                  Login
                </button>
              </div>

              <h2 className="profile-footer mb-2">OR</h2>

              <Link className="mt-2" to="/register">
                New here? Create an account
              </Link>
              <Link className="mb-3" to="/forgotPassword">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="d-flex">
              <div className="mt-5" style={{ marginTop: "80px" }}>
                <img
                  src={gold}
                  alt="Gold Image"
                  className="img-fluid img-thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
