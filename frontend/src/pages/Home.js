import React from "react";

export default function Home() {
  const url_image =
    "https://www.portugalist.com/wp-content/uploads/job-interview-candidates.jpg";

  return (
    <>
      <div className="home-body">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${url_image})`,
            backgroundSize: "cover",
            backgroundPosition: "5",
            width: "500px",
          }}
        ></div>
        <div className="page">
          <h1>Find the perfect job that fits you!!</h1>
        </div>
      </div>
    </>
  );
}
