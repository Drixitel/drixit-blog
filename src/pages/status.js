import React from "react";

const StatusPage = () => {
  return (
    <section style={{ marginLeft: "2em" }}>
      <h1>Current Netlify Status</h1>
      <p>
        Status of last commit:{" "}
        <img
          alt="status"
          src="https://api.netlify.com/api/v1/badges/51528303-0ebb-4a66-91f6-8cd001f5b929/deploy-status"
        />
      </p>
      <a href="https://app.netlify.com/sites/drixit-blog/deploys">
        see deploys
      </a>
    </section>
  );
};

export default StatusPage;
