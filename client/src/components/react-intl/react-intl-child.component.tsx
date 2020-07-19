import { useIntl } from "react-intl";
import React, { memo } from "react";
import messages from "./messages";

const ReactIntlChild: React.FC = () => {
    const { formatMessage } = useIntl();

    return <>{formatMessage(messages.browse)}</>;
};

export default memo(ReactIntlChild);
