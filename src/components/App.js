
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
      <h2 className="tooltiptext" onMouseOver={() => handleHover(1)}>
      
        {hover.id == 1 && <div>This is a tooltip</div>}
        Hover over me
      </h2>

      <hr />

      <p className="tooltip" onMouseOver={() => handleHover(2)}>
       
        {hover.id == 2 && <div>This is another tooltip</div>}
        Hover over me to see another tooltip{" "}
      </p>

      <hr />
    </div>
  );
}

export default App
