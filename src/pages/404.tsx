import React from "react";
import Layout from "../components/layouts.tsx/Layout";

function PageNotFound() {
  return (
    <>
      <title>Page Not Found (404) | About Seihyun Lee</title>

      <Layout>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              height: 20,
            }}
          />
          <h2>Page Not Found</h2>
          <h3
            style={{
              color: "grey",
            }}
          >
            404
          </h3>
          <p
            style={{
              color: "grey",
              opacity: 0.5,
            }}
          >
            Oh nooo
          </p>
        </div>
      </Layout>
    </>
  );
}

export default PageNotFound;
