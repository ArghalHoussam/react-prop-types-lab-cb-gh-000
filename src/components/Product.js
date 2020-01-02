// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {

}
let weight_range = [];
for (let i = 80; i <= 300; i++) {
  weight_range.push(i);
}

// React.PropTypes.oneOf(weight_range).isRequired
Product.propTypes = {
    name: propTypes.string.isRequired,
    producer: propTypes.string,
    hasWatermark: propTypes.bool,
    color: propTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: propTypes.onOf(weight_range)
};

Product.defaultProps = {
  hasWatermark: false
};
