import MaterialLoader from "../components/loader/MaterialLoader";
import React from "react";

export default (WrappedComponent) => ({isLoading, ...restProps}) => (
    isLoading ?
    <MaterialLoader/> :
    <WrappedComponent {...restProps} />
);
