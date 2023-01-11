import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="page">
      <div className="header-container">
        <div className="header-left">
          <h2 className="heading">
            {" "}
            Online Market With The Biggest Product Choice
            <p className="sub-heading">
              {" "}
              In our Online store the biggest choice of products on the planet.
              Free delivery and a lot of benefits for you yet.
            </p>
          </h2>
          <button href="- /* create tag later */ -" className="discount">
            {" "}
            Get Discount for $99{" "}
          </button>
        </div>
        <div className="header-right">
          <img
            src="https://images.unsplash.com/photo-1467196271131-42c8c8499d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80"
            alt="header"
            className="header-img"
          ></img>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-left">
            <img
              className="card-img"
              src="https://images.unsplash.com/photo-1597415581463-4b7a5a87be62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="card"
            ></img>
          </div>
          <div className="card-right">
            <h3 className="card-title"> Iphone XR </h3>
            <p className="card-text">
              {" "}
              Super retina in two sizes- including the largest display ever on
              iphone.{" "}
            </p>
            <button className="card-button"></button>
          </div>
        </div>
        <div className="card">
          <div className="card-left">
            <img
              className="card-img"
              src="https://ipure.cz/wp-content/uploads/2019/03/chuttersnap-299122-unsplash-scaled.jpg"
              alt="card"
            ></img>
          </div>
          <div className="card-right">
            <h3 className="card-title"> Apple Watch </h3>
            <p className="card-text">
              {" "}
              Get the motivation you need to achieve your fitness goals.{" "}
            </p>
            <button className="card-button"></button>{" "}
          </div>
        </div>
        <div className="card">
          <div className="card-left">
            <img
              className="card-img"
              src="https://www.innovatorsmag.com/wp-content/uploads/2019/05/stephan-sorkin-1492677-unsplash.jpg"
              alt="card"
            ></img>
          </div>
          <div className="card-right">
            <h3 className="card-title"> VR Headsets </h3>
            <p className="card-text">
              {" "}
              a realistic three-dimensional image or artificial environment.
            </p>
            <button className="card-button"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
