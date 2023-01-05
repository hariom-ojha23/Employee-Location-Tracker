import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout: FC = (): JSX.Element => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
