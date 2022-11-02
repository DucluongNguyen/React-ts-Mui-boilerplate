import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import React, { useMemo } from "react";
import { PADDING_SIDE } from "theme";
import { useLocation } from "react-router-dom";

import commonStyles from "components/CommonStyles";
import { CLASS } from "constants/enum";
import { RouteBase } from "constants/routeUrl";
import useSagaCreators from "hooks/useSagaCreators";
import { LinkP } from "interfaces";
import { authActions } from "redux/creators/modules/auth";
import { GetAuthSelector } from "redux/selectors";

const links = [
  {
    link: RouteBase.Home,
    lable: LinkP.HOME,
  },
  {
    link: RouteBase.Dashboard,
    lable: LinkP.DASHBOARD,
  },
  {
    link: RouteBase.About,
    lable: LinkP.ABOUT,
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    width: "100%",
    background: "#fff",
    paddingLeft: PADDING_SIDE,
    paddingRight: PADDING_SIDE,
    [theme.breakpoints.down("md")]: {
      height: "100px",
    },
  },
}));

const Header: React.FC = (props) => {
  // !State
  const classes = useStyles();
  const auth = GetAuthSelector();
  const { isLogin } = auth;
  const { dispatch } = useSagaCreators();
  const location = useLocation();

  const routeName = useMemo(() => {
    const path = location.pathname.slice(1, location.pathname.length);
    if (path) {
      return path;
    }
    return "home";
  }, [location]);

  // !Function
  const logout = () => {
    dispatch(authActions.logout);
  };

  // !Render
  return (
    <div className={classNames(CLASS.HEADER, classes.header)}>
      {links.map((link) => (
        <commonStyles.Link key={link.link} to={link.link}>
          <commonStyles.Button variant={routeName === link.lable.toLocaleLowerCase() ? "contained" : "text"}>
            {link.lable}
          </commonStyles.Button>
        </commonStyles.Link>
      ))}
      {isLogin ? (
        <commonStyles.Button onClick={logout}>LOGOUT</commonStyles.Button>
      ) : (
        <commonStyles.Link to={RouteBase.Login}>
          <commonStyles.Button>{LinkP.LOGIN}</commonStyles.Button>
        </commonStyles.Link>
      )}
    </div>
  );
};

export default Header;
