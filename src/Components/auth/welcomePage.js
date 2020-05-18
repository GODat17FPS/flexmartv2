import React from "react";
import { Link } from "react-router-dom";
import "./welcomePage.css";
function welcomePage() {
  return (
    <div class="x">
      <div class="bg">
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
      </div>

      <div className="welcome-page">
        <div className="welcome-head">
          <h3>Welcome to FlexMart</h3>
        </div>
        <div className="welcome-components">
          <Link className="welcome-x" to="/SignUp/Customer">
            <button type="button" className="btn btn-dark">
              Sign Up
            </button>
          </Link>
          <Link className="welcome-x" to="/Login">
            <button type="button" className="btn btn-dark">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default welcomePage;
