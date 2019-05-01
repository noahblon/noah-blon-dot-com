import React, { Fragment } from "react";
import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/use-site-metadata";

export default () => {
  const { title, description } = useSiteMetadata();
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
