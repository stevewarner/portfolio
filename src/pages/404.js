import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column">
            <h1>PAGE NOT FOUND</h1>
            <p>
              Looks like this page doesn't exist. Try going back{" "}
              <Link to="/">home</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
