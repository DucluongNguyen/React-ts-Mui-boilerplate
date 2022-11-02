import React from "react";
// @ts-ignore
import LoadingScreenLib from "react-loading-screen";

type Props = {};

const LoadingScreen = (props: any) => {
  return (
    <LoadingScreenLib
      loading={true}
      bgColor="#f1f1f1"
      spinnerColor="#9ee5f8"
      textColor="#676767"
      // logoSrc={spinner}
      // text="Loading..."
    />
  );
};

export default LoadingScreen;
