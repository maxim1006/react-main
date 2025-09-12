import * as React from 'react';

type ErrorBoundaryProps = {
    fallback?: React.ReactNode; // что рендерим при ошибке
    children?: React.ReactNode; // вложенные компоненты
};

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    public state = { hasError: false };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(_error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.log('error: ', error, 'errorInfo: ', info);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? <h1>Error is caught. Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export { ErrorBoundary };
