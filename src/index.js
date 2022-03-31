import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import InfluencerMakerManager from "./model/InfluencerMakerManager.js";

async function shouldInitialize() {
  console.log("Checking if I should initialize");
  const imm = InfluencerMakerManager();
  let dbIdeas = await imm.getIdeas();

  if (dbIdeas.length === 0) {
    console.log("Yes, I need to initialize");

    await imm.createIdea({
      name: "Test 1",
      status: "Baby",
      createdAt: new Date(),
    });
    await imm.createIdea({
      name: "Test 2",
      status: "Baby",
      createdAt: new Date(),
    });
    await imm.createIdea({
      name: "Test 3",
      status: "Baby",
      createdAt: new Date(),
    });
    await imm.createIdea({
      name: "Whatever",
      status: "Teenager",
      createdAt: new Date(),
    });
  } else {
    console.log("Nop we are good");
  }
}

shouldInitialize();

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
