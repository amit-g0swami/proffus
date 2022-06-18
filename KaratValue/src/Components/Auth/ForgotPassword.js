import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import cross from "../../images/cross.png";
import Footer from ".././Component/Footer";
import { forgetPassword } from "../../actions/auth";
import { useAlert } from "react-alert";

function ForgotPassword() {
  const history = useHistory();
  const alert = useAlert();
  const [email, setemail] = useState();

  window.scrollTo(0, 0);

  const handlesave = async (e) => {
    e.preventDefault();
    if (!email) {
      return alert.error("Invalid email or password");
    }
    forgetPassword({ email }).then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        alert.success(data.message);
        history.push("/login");
      }
    });
  };

  document.title = "Forgot Password";

  return (
    <>
      <div className="container" style={{ marginTop: "180px" }}>
        <div className="row">
          <div className="col-md-6 offset-3">
            <center>
              <h2 className="profile-heading">Password Reset</h2>
            </center>
            <div className="profile-row mt-5">
              <div className="input">
                <input
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  required
                />
              </div>
            </div>
            <div className="profile-row btn">
              <button
                className="save"
                style={{ width: "50%" }}
                onClick={handlesave}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
        <center>
          <h2 className="profile-footer">OR</h2>
        </center>
        <center>
          <Link to="/register">New Here? Create an account</Link>
        </center>
        <center>
          <Link to="/login">Login</Link>
        </center>
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;
