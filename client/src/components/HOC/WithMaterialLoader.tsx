import React from 'react';
import MaterialLoader from '../loader/MaterialLoader';

// type BannersListContainerProps = {
// wrapperTag?: keyof JSX.IntrinsicElements;
// };

// return <>{Wrapper ? <Wrapper className={className}>{bannersList}</Wrapper> : bannersList}</>;

type WithMaterialLoaderProps = {
    isLoading: boolean;
};

export const WithMaterialLoader = <P extends Record<string, unknown>>(
    Component: React.ComponentType<P>
): React.FC<P & WithMaterialLoaderProps> => ({ isLoading, ...restProps }) =>
    isLoading ? <MaterialLoader /> : <Component {...(restProps as P)} />;
