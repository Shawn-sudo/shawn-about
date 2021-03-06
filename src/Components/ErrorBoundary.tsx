import React, { Component, ErrorInfo, ReactNode } from "react";
import Wrapper from "./Wrapper";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <h2
            style={{
              textAlign: "center",
              margin: 55,
            }}
          >
            Something went wrong.
          </h2>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Try refreshing the page.
          </p>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
