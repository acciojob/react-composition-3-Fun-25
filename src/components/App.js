
import { useState } from 'react';
import React from "react";
import './../styles/App.css';
 
const App = () => {
  const [hover, setHover] = useState({ id: 0, status: false });
  return (
    <div>
      <Tooltip hover={hover} setHoverEffect={setHover} />
    </div>
  );
};

function Tooltip({ hover, setHoverEffect }) {
  function handleHover(id) {
    setHoverEffect({ id: id, status: true });
  }
  return (
    <div>
      <div className="tooltiptext">
        {hover.id == 1 && <div>This is a tooltip</div>}
        <h1 onMouseOver={() => handleHover(1)}>Hover over me</h1>
      </div>
      <hr />
      <div className="tootip">
        {hover.id == 2 && <div>This is another tooltip</div>}
        <p onMouseOver={() => handleHover(2)}>
          Hover over me to see another tooltip
        </p>
      </div>
      <hr />
    </div>
  );
}

export default App
