import React from "react";

import { useSelector } from "react-redux";
import Header from "../components/Header";

function Home() {
  console.log(useSelector((state) => state.authState));
  return (
    <main>
      <Header />
    </main>
  );
}

export default Home;
