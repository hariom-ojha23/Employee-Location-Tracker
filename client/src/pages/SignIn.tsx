import React from "react";
import { Link } from "react-router-dom";

import AuthPagesContainer from "../components/AuthPagesContainer";

const SignIn = () => {
  return (
    <AuthPagesContainer>
      <div>
        <Link to="/auth/signup">Hello</Link>
      </div>
    </AuthPagesContainer>
  );
};

export default SignIn;
