import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="header-container">
      <section className="header-left">
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
      </section>
      <section className="header-right">
        <img
          src="https://images.unsplash.com/photo-1467196271131-42c8c8499d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80"
          alt="header"
          className="header-img"
        ></img>
      </section>
    </div>
  );
}

export default App;
