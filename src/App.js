import "./App.scss";
import React from "react";
import Photos from "./components/photo/photos";

function App() {
  return (
    <div className="p-5">
      <h2 className="bg-gray-100">One piece Fan</h2>
      <Photos></Photos>
    </div>
  );
}

export default App;
