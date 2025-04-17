import React, { useState } from "react";

function App() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const googleMapsSrc = `https://www.google.com/maps/embed/v1/directions?key=YOUR_GOOGLE_MAPS_API_KEY&origin=${encodeURIComponent(start)}&destination=${encodeURIComponent(end)}&mode=walking`;

  return (
    <div className={darkMode ? "dark" : ""} style={{ padding: "2rem" }}>
      <h1>VNRVJIET Campus Navigation</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
      <div>
        <input
          placeholder="Start Location"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <input
          placeholder="End Location"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </div>
      {start && end && (
        <iframe
          title="map"
          width="100%"
          height="400"
          src={googleMapsSrc}
          style={{ border: 0, marginTop: "1rem" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
}

export default App;
