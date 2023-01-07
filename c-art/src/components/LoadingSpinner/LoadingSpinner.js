import React from "react";
import { Triangle } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <>
      <Triangle
        height="100"
        width="100"
        color="#85CF81"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </>
  );
}
