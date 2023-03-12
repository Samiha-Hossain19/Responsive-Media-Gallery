import React, { useState } from "react";
import { Media } from "../src/media";

const App = () => {
  const [file, setFile] = useState(null);
  return (
    <div className="container">
      <h1>Media Gallery</h1>

      <div className="media-container">
        {Media.map((file, index) => (
          <div className="media" key={index} onClick={() => setFile(file)}>
            {file.type === "image" ? (
              <img src={file.url} alt="" />
            ) : (
              <video src={`${file.url}#t=0.001`} muted preLoad="metadata" />
            )}
          </div>
        ))}
      </div>
      <div className="popup-media" style={{ display: file ? "block" : "none" }}>
        <span onClick={() => setFile(null)}>&times;</span>
        {file?.type === "video" ? (
          <video src={file?.url} muted autoPlay controls />
        ) : (
          <img src={file?.url} alt="" />
        )}
      </div>
    </div>
  );
};

export default App;
