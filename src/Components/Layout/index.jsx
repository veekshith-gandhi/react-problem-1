/** @format */

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  // console.log(children);
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
