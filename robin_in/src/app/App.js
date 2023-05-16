import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
import { useState } from "react";

function App() {
  const [mapInit, setMapInit] = useState(null);

  const saveMapInit = (map) => {
    setMapInit(map)
  }

  return (
    <BrowserRouter>
      <Routers mapInit={mapInit} saveMapInit={saveMapInit} />
    </BrowserRouter>
  );
}

export default App;
