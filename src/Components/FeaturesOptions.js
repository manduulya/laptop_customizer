import React from 'react';
import slugify from 'slugify';

const FeatureOption = (props) => {
    const { feature } = props;
    const options = props.features[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === props.selected[feature].name}
            onChange={(e) => props.updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({props.USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });
    return <div>{options}</div>;
  };
  
  export default FeatureOption;