import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: FC = (): JSX.Element => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
