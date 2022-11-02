import { useLayoutEffect } from "react";

import { authActions } from "redux/creators/modules/auth";
import useSagaCreators from "hooks/useSagaCreators";

export const useCheckAuth = () => {
  const { dispatch } = useSagaCreators();

  useLayoutEffect(() => {
    dispatch(authActions.checkAuth);
  }, [dispatch]);
};
