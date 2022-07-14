import "./App.scss";
import React from "react";
import Toggle from "./components/toggle/toggle";
import Covid19 from "./components/covid19/covid19";
function App() {
  return (
    <div className="p-5">
      <h2 className="bg-gray-100">One piece Fan</h2>
      <Toggle></Toggle>
      <Covid19></Covid19>
    </div>
  );
}

export default App;
