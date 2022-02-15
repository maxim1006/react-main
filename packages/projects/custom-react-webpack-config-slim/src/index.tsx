import { render } from 'react-dom';
import App from './app.component';

const renderWithData = function (elementId: string) {
    render(<App />, document.getElementById(elementId));
};

export default render;

if (process.env.NODE_ENV === 'development') {
    void import('./data.data').then(data => {
        console.log(data);
        renderWithData('root');
    });
}
