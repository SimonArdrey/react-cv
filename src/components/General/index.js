import React from 'react';
import styled, { withTheme } from 'styled-components';

const TextBase = withTheme(({
  className,
  as,
  children,
  theme,
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  color,
  size,
  weight,
  ...props
}) => {
  const Component = as;
  const style = {
    ...notUndefined(m) && { margin: `${m}em` },
    ...notUndefined(mx) && { marginLeft: `${mx}em`,  marginRight: `${mx}em` },
    ...notUndefined(my) && { marginTop: `${my}em`,  marginBottom: `${my}em` },
    ...notUndefined(mt) && { marginTop: `${mt}em` },
    ...notUndefined(mr) && { marginRight: `${mr}em` },
    ...notUndefined(mb) && { marginBottom: `${mb}em` },
    ...notUndefined(ml) && { marginLeft: `${ml}em` },
    ...notUndefined(p) && { padding: `${p}em` },
    ...notUndefined(px) && { paddingLeft: `${px}em`,  paddingRight: `${px}em` },
    ...notUndefined(py) && { paddingTop: `${py}em`,  paddingBottom: `${py}em` },
    ...notUndefined(pt) && { paddingTop: `${pt}em` },
    ...notUndefined(pr) && { paddingRight: `${pr}em` },
    ...notUndefined(pb) && { paddingBottom: `${pb}em` },
    ...notUndefined(pl) && { paddingLeft: `${pl}em` },
    ...notUndefined(color) && { color: color },
    ...notUndefined(size) && { fontSize: `${size}em` },
    ...notUndefined(weight) && { fontWeight: weight },
  };

  return (<Component className={className} style={style} {...props}>{children}</Component>);
});
TextBase.defaultProps = {
  as: 'p',
};

const notUndefined = (x) => typeof x !== 'undefined';

/* const firstDefinedValue = (list) => {
  for (let value of list) {
    if (notUndefined(value)) {
      return value;
    }
  }

  return null;
}; */


export const Text = styled(TextBase)`
  font-family: ${props => props.theme.font.family};
  font-weight: ${props => props.theme.font.weight};
  color: ${props => props.theme.font.color};
  font-size: ${props => props.theme.font.size}em;
  margin: ${props => props.theme.font.margin};
`;
Text.defaultProps = {
  theme: {
    font: {
      family: 'sans-serf',
      weight: '200',
      color: '#000',
      size: 1,
      margin: 0,
    },
  }
};

export const HeadingText = styled(TextBase)`
  font-family: ${props => props.theme.headingFont.family};
  font-weight: ${props => props.theme.headingFont.weight};
  color: ${props => props.theme.headingFont.color};
  font-size: ${props => props.theme.headingFont.size}em;
  margin: ${props => props.theme.headingFont.margin};
`;
HeadingText.defaultProps = {
  theme: {
    headingFont: {
      family: 'sans-serf',
      weight: '400',
      color: '#000',
      size: 1,
      margin: 0,
    },
  }
};
