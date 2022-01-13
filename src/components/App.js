import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {
  //below are states and state setters that 
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  

  //end 

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header 
      
        onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode}
      />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
