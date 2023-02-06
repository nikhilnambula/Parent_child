import React from "react";

// import { Button } from "./Button";
import "./header.css";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20C4.477 20 0 15.523 0 10C0 5.522 2.943 1.732 7 0.458V2.582C5.28092 3.28005 3.8578 4.55371 2.97406 6.18512C2.09032 7.81652 1.80088 9.70431 2.15525 11.5255C2.50963 13.3468 3.48579 14.9883 4.91676 16.1693C6.34774 17.3503 8.14461 17.9975 10 18C11.5938 18 13.1513 17.524 14.4728 16.6332C15.7944 15.7424 16.82 14.4773 17.418 13H19.542C18.268 17.057 14.478 20 10 20ZM19.95 11H9V0.05C9.329 0.017 9.663 0 10 0C15.523 0 20 4.477 20 10C20 10.337 19.983 10.671 19.95 11ZM11 2.062V9H17.938C17.7154 7.23761 16.9129 5.59934 15.6568 4.34324C14.4007 3.08713 12.7624 2.28459 11 2.062Z"
            fill="#4B4B60"
          />
        </svg>
      </div>
    </div>
  </header>
);
