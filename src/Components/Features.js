import React, { Component } from "react";
import FeaturesOptions from "./FeaturesOptions";
import FeatureName from "./FeatureName";

export default class Features extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      return (
        <fieldset className="feature" key={featureHash}>
          <FeatureName 
          feature={feature}
          />

          <FeaturesOptions
            USCurrencyFormat={this.props.USCurrencyFormat}
            features={this.props.features}
            feature={feature}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
          />
        </fieldset>
      );
    });

    return <div>{features}</div>;
  }
}