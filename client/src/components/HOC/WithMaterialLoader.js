import React from 'react';
import MaterialLoader from '../loader/MaterialLoader';

// type BannersListContainerProps = {
// wrapperTag?: keyof JSX.IntrinsicElements;
// };

// return <>{Wrapper ? <Wrapper className={className}>{bannersList}</Wrapper> : bannersList}</>;

export default WrappedComponent => ({ isLoading, ...restProps }) =>
    isLoading ? <MaterialLoader /> : <WrappedComponent {...restProps} />;
