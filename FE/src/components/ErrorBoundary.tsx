import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error) {
        // Update state to indicate an error has occurred
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error or send it to a logging service here
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI to display when an error occurs
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <p>{this.state.error && this.state.error.toString()}</p>
                    <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                </div>
            );
        }

        // Render the children if there's no error
        return this.props.children;
    }
}

export default ErrorBoundary;