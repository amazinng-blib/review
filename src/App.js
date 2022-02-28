import React from "react";
import Reviews from "./reviews/Reviews";

const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
        </div>
        <div className="underline"></div>
        <Reviews />
      </section>
    </main>
  );
};

export default App;
