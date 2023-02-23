import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LoadingScreenLib from "react-loading-screen";

const LoadingScreen = () => {
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
