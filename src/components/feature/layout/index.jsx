import React, { memo, Fragment } from "react";
import Navbar from "../navbar";

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <Fragment>{children}</Fragment>
    </Fragment>
  );
}

export default memo(Layout);
