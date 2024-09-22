import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DataProvider } from "./Components/DataProvider/DataProvider.jsx";
import { reducer, instialState } from "./Utility/reducer.js";
import './index.css' 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={instialState}>
      <App />
    </DataProvider>
  </StrictMode>
);
