import { Outlet } from "react-router-dom";
import React from "react";

function PrimaryRouteLayout() {
  return (
    <>
      <></>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default PrimaryRouteLayout;
