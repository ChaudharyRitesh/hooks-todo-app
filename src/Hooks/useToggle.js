import { useState } from "react";

function usetoggle(initialVal = false) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

export default usetoggle;
