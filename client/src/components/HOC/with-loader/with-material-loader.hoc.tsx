import { ComponentType, FC } from 'react';
import MaterialLoader from '../../loader/MaterialLoader';

// type BannersListContainerProps = {
// wrapperTag?: keyof JSX.IntrinsicElements;
// };

// return <>{Wrapper ? <Wrapper className={className}>{bannersList}</Wrapper> : bannersList}</>;

type WithMaterialLoaderProps = {
    isLoading: boolean;
};

export const withMaterialLoader =
    <P extends Record<string, unknown>>(Component: ComponentType<P>): FC<P & WithMaterialLoaderProps> =>
    ({ isLoading, ...restProps }) =>
        isLoading ? <MaterialLoader /> : <Component {...(restProps as P & WithMaterialLoaderProps)} />;
