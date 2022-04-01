import react from "react";

import MainPage from "./pages/MainPage";

import InfluencerMakerManager from "./model/InfluencerMakerManager.js";

import "./App.css";


let count =0;
function App() {
  const imm = new InfluencerMakerManager();

  return (
    <div className="App">
      <MainPage imm={imm}></MainPage>
    </div>
  );
}

export default App;
