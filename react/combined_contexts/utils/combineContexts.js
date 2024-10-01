import React from "react";
import PropTypes from "prop-types";

export const combineContexts = (...components) => {
  return components.reduce(
    (AccumulatedContexts, CurrentComponent) => {
      return ({ children }) => {
        return (
          <AccumulatedContexts>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedContexts>
        );
      };
    },
    ({ children }) => <>{children}</>,
  );
};

combineContexts.propTypes = {
  children: PropTypes.node.isRequired
};

combineContexts.displayName = "CombinedContextProvider";
