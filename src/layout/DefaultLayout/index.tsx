import React, { Fragment, Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import classNames from "classnames";
import { makeStyles } from "@mui/styles";
import { PADDING_SIDE } from "theme";

import Footer from "components/Footer";
import Header from "components/Header";
import PrivateRoute from "components/PrivateRoute";
import routes from "routes";
import { useGetHeightHeader } from "hooks/useGetHeightHeader";
import { CLASS } from "constants/enum";
import commonStyles from "components/CommonStyles";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: ({ style }: any) => {
      return `${style + 8}px`;
    },
    padding: `0 ${PADDING_SIDE}px`,
  },
}));

const DefaultLayout: React.FC = () => {
  // !State
  const { height } = useGetHeightHeader(`.${CLASS.HEADER}`);
  const classes = useStyles({ style: height });

  // !Render
  return (
    <Fragment>
      <Header />
      <main className={classNames("main-container", classes.main)}>
        <Suspense fallback={<commonStyles.LoadingScreen />}>
          <Switch>
            {routes.map((route: any, idx: number) => {
              if (route.isPrivate) {
                return <PrivateRoute key={idx} path={route.path} exact={route.exact} component={route.component} />;
              }

              return <Route key={idx} path={route.path} exact={route.exact} component={route.component} />;
            })}
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
