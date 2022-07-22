import { createReduxTestsStore } from '@app/tests/store/store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

export const renderWithRedux = (component, preloadedState) => {
    return render(<Provider store={createReduxTestsStore(preloadedState)}>{component}</Provider>);
};
