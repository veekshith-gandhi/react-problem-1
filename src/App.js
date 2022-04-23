/** @format */

import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Router from "./Router";
import "./Styles/globalStyle.scss";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
