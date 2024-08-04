import { useEffect, useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import axios from "axios";

function App() {
 
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app rounded-4">
            <SearchForm defaultCity={"bangalore"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
