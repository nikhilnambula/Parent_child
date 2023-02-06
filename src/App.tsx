import React from "react";
import "./App.css";
import Molecule from "./Components/molecules/NavBar";
// import SideNav from "./Components/molecules/SideNav";
// import Icon1 from "./images/Icon1.svg";
import {
  Icon1,
  Icon2,
  // Icon3,
  Icon4,
  Icon6,
  Icon7,
  Icon9,
  // Icon8,
} from "./Components/Atoms/SvgIcons";

function App() {
  return (
    <div className="App">
      <Molecule icons={[Icon9, Icon4, Icon7, Icon2, Icon1, Icon6]}></Molecule>
    </div>
  );
}

export default App;
