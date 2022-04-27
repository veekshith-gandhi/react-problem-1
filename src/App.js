/** @format */

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Router from "./Router";
import store from "./store";
import "./Styles/globalStyle.scss";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Layout>
          <Provider store={store}>
            <Router />
          </Provider>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
