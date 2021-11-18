import React from "react";

import { useSelector } from "react-redux";

function Home() {
  console.log(useSelector((state) => state.authState));
  return <div>Home</div>;
}

export default Home;
