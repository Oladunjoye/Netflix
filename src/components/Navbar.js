import React from "react";
import { Icon } from "semantic-ui-react";

function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <Icon name="play circle" size="huge" class="Icon" />
        <button class="ui red button sign-in">Sign in</button>
      </nav>
    </div>
  );
}

export default Navbar;
