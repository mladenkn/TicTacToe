import React from 'react';
import { Link as MuiLink } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const createRefRouterLink = (url) => React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to={url} {...props} />
));

export const Link = (p) => <MuiLink {...p} component={createRefRouterLink(p.href)} />

export const withInjected = (injectedProps) => (Component) => (otherProps) => 
  <Component {...injectedProps} {...otherProps} />