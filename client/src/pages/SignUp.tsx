import React from "react";
import { Link } from "react-router-dom";

import AuthPagesContainer from "../components/AuthPagesContainer";

const SignUp = () => {
  return (
    <AuthPagesContainer>
      <Link to="/auth/signin">
        <h1>Hello</h1>
      </Link>
    </AuthPagesContainer>
  );
};

export default SignUp;
