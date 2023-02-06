import React from "react";
import "./SideNav.css";
// import { Icon8 } from "../Atoms/SvgIcons";

interface Props {
  icons: React.FC<any>[];
}

const Molecule: React.FC<Props> = ({ icons }) => {
  return (
    <div className="container">
      <div className="side-nav">
        {icons.map((Icon, index) => (
          <div>
            <Icon key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Molecule;
