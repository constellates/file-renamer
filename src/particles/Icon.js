import * as React from 'react';
import PropTypes from 'prop-types';

function Icon({ name = '', regular = false }) {
  const classes = [`fa-${name}`];
  if (regular) {
    classes.push('fa-regular');
  } else {
    classes.push('fa-solid');
  }
  const className = classes.join(' ');
  return <i className={className} />;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  regular: PropTypes.bool,
};

export default Icon;
