import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isEmpty } from "lodash";

import { GetAuthSelector } from "redux/selectors/auth";
import { RouteBase } from "constants/routeUrl";
import authService from "services/authService";

const PrivateRoute = (props: any) => {
  // !State
  const auth = authService.getUserLocalStorage();

  // !Render
  if (!isEmpty(auth)) {
    return <Route {...props} />;
  }

  return <Redirect to={RouteBase.Login} />;
};

export default PrivateRoute;
