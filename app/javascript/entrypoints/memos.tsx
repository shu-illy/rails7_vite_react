import React from "react";
import ReactDOM from "react-dom/client";
import { MemosScreen } from "../src/components/MemosScreen";
// import "../src/index.css";

ReactDOM.createRoot(document.getElementById("memos")!).render(
  <React.StrictMode>
    <MemosScreen />
  </React.StrictMode>
);
