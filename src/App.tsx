import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RouteBase } from "constants/routeUrl";
import { useCheckAuth } from "hooks/auth/useCheckAuth";
import DefaultLayout from "layout/DefaultLayout";
import LoginPage from "views/Login";
import "./styles/scss/styles.scss";

const App: React.FC = () => {
  // !Function
  useCheckAuth();

  //! Render
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop
        // closeButton={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // toastClassName={classes.eachToast}
        transition={Zoom}
      />
      <Switch>
        <Route path={RouteBase.Login} exact component={LoginPage} />
        <Route path={RouteBase.Home} component={DefaultLayout} />
      </Switch>
    </Router>
  );
};

export default App;
