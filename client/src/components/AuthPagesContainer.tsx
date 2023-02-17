import React from "react";

type Props = {
  children?: JSX.Element;
};

const AuthPagesContainer = ({ children }: Props) => {
  return (
    <div className="header">
      <div className="inner-header">{children}</div>
    </div>
  );
};

export default AuthPagesContainer;
