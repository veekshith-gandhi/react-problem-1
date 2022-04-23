/** @format */

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Header />
      <main style={{ height: "60vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
