import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect in="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect in="/dashboard" />;
  }

  return <Route component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
