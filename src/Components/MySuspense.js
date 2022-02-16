import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Wrapper from "./Wrapper";

const MySuspense = (props) => {
  return (
    <Suspense
      fallback={
        <Wrapper>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                marginTop: "calc(40vh)",
              }}
            >
              <i
                className="fas fa-spinner fa-pulse"
                style={{
                  fontSize: 50,
                  color: "#ff5252",
                }}
              ></i>
            </div>
          </div>
        </Wrapper>
      }
    >
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </Suspense>
  );
};

export default MySuspense;
