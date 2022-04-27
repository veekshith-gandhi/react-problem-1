/** @format */

import { createPortal } from "react-dom";

const Portal = ({ children, show }) => {
  if (!show) return null;
  return createPortal(<>{children}</>, document.getElementById("portals"));
};
export default Portal;
