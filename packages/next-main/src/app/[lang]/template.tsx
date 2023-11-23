import React, { memo, FC, ReactNode } from 'react';

// Templates are similar to layouts in that they wrap each child layout or page. Unlike layouts that persist across routes and maintain state, templates create a new instance for each of their children on navigation. Те будет пересоздаваться каждый раз при навигации
type MainTemplateProps = {
    children: ReactNode;
};

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default memo(MainTemplate);
