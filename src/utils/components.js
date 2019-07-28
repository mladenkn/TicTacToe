import React from 'react';
import { Link as MuiLink, Divider as MUIDivider } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const createRefRouterLink = (url) => React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to={url} {...props} />
));

export const Link = (p) => <MuiLink {...p} component={createRefRouterLink(p.href)} />