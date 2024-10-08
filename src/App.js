//import { useEffect, useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Suggestions from "./components/Suggestions";
// import axios from "axios";

function App() {
 
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app rounded-4">
            <SearchForm defaultCity={"bangalore"} />
            <Suggestions history={}/>        
   </div>
        </div>
      </div>
    </div>
  );
}

export default App;
