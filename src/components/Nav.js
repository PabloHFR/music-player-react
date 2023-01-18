import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  // Event Handlers
  const openLibrary = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>Music Player</h1>
      <button onClick={openLibrary}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
