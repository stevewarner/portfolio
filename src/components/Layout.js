import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import "../global.sass";

import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌🏻</text></svg>"
        />

        <meta name="theme-color" content="#fff" />
      </Helmet>
      <Navbar />
      <div style={{ paddingTop: "5.25rem" }}>{children}</div>
    </div>
  );
};

export default TemplateWrapper;
