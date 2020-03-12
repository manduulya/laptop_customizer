import React from "react";

const FeatureName = (props) => {
  return (
    <legend className="feature__name">
      <h3>{props.feature}</h3>
    </legend>
  );
};

export default FeatureName;