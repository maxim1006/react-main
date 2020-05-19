import React from "react";
import MaterialLoader from "../loader/MaterialLoader";

export default WrappedComponent => ({ isLoading, ...restProps }) =>
    isLoading ? <MaterialLoader /> : <WrappedComponent {...restProps} />;
