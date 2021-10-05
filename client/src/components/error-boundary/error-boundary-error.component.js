import { PureComponent } from 'react';

export class ErrorBoundaryError extends PureComponent {
    render() {
        // render обязательно должен что-то возврщать и если бы не было обернуто в ErrorBoundary,
        // то приложение бы крашнулось, а так только ошибки, которые обрабатываю в ErrorBoundary
        return undefined;
    }
}
