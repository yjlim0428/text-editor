import React from "react";
import Jodit from "./Jodit";
import Quill from "./Quill";
import Draft from "./Draft";

const App = () => {
  return (
    <>
      <Quill />
      <div style={{ height: "50vh" }} />
      <Jodit />
      <div style={{ height: "50vh" }} />
      <Draft />
      <div style={{ height: "50vh" }} />
    </>
  );
};

export default App;
