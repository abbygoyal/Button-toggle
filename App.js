import React, { useState } from "react";

function App() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <button
        onClick={() => handleButtonClick(1)}
        // className={activeButton === 1 ? "active" : ""}
      >
        Button 1
      </button>
      <button
        onClick={() => handleButtonClick(2)}
        // className={activeButton === 2 ? "active" : ""}
      >
        Button 2
      </button>
      <button
        onClick={() => handleButtonClick(3)}
        // className={activeButton === 3 ? "active" : ""}
      >
        Button 3
      </button>
      <div className="content">
        {activeButton === 1 && <p>Hiii 1</p>}
        {activeButton === 2 && <p>Hiii 2</p>}
        {activeButton === 3 && <p>Hiii 3</p>}
      </div>
    </div>
  );
}

export default App;
