import React from "react";
import Head from "./head";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <main>{children}</main>
    </>
  );
};

export default Layout;
