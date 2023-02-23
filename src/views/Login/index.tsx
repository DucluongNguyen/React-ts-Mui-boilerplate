import { FastField, Field, Form, Formik } from "formik";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import { authActions } from "redux/creators/modules/auth";
import { GetAuthSelector } from "redux/selectors/auth";
import useSagaCreators from "hooks/useSagaCreators";
import Button from "components/CommonStyles/Button";
import ErrorFocus from "components/ErrorFocus";
import commonStyles from "components/CommonStyles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: 300,
  },
}));

const LoginPage = () => {
  // !State
  const classes = useStyles();
  const { dispatch } = useSagaCreators();
  const auth = GetAuthSelector();
  const { isLogin } = auth;

  if (isLogin) {
    return <Redirect to="/" />;
  }

  // !render
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(values) => {
        const { username, password } = values;
        dispatch(authActions.login, {
          username,
          password,
          callbacks: {
            onSuccess: () => {
              console.log("hello");
            },
            onFailed: () => {
              console.log("hello");
            },
          },
        });
      }}
    >
      {() => (
        <Form>
          <ErrorFocus />
          <div className={classes.root}>
            <div>username: admin & password: admin</div>
            <div>
              <FastField fullWidth label="Username" component={commonStyles.TextField} name="username" />
            </div>

            <div>
              <Field
                label="Password"
                component={commonStyles.TextField}
                showHidePassword
                name="password"
                type="password"
                fullWidth
              />
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};
export default LoginPage;
