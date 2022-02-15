import { useIntl } from 'react-intl';
import { FC, memo } from 'react';
import messages from './messages';

const ReactIntlChild: FC = () => {
    const { formatMessage } = useIntl();

    return <>{formatMessage(messages.browse)}</>;
};

export default memo(ReactIntlChild);
