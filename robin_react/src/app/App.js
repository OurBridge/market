import { BrowserRouter} from "react-router-dom";
import Router from "./Router";
import Layout from "../components/layout/Layout";
import { useState } from "react";

function App() {
  const [mapInit, setMapInit] = useState(null);

  // map 저장
  const saveMap = (map) => {
    setMapInit(map);
  };

  return (
    <BrowserRouter>
      <Router mapInit={mapInit} />
      <Layout saveMap={saveMap} />
    </BrowserRouter>
  );
}

export default App;
