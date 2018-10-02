import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import chroma from 'chroma-js';

const buttonBackgroundColor = 'white';
const buttonHeight = '28px';
const buttonWidth = '90px';
const buttonBorderStyle = 'solid';
const buttonBorderSize = '2px';
const buttonBorderRadiusSize = '5px';
const buttonSideBySideGap = '10px';
const buttonFontFamily = 'serf, arial';

const colors = {
  default: '#afafaf',
  primary: '#008bec',
  success: '#47af22',
};

export const Button = styled.button.attrs({
  color: props => colors[props.color] || colors.default,
  selected: props => props.selected || false,
  disabled: props => props.disabled || false,
})`
  background: ${buttonBackgroundColor};
  color: ${props => props.color};

  display: inline-block;
  box-sizing: content-box;
  height: ${buttonHeight};
  line-height: ${buttonHeight};
  min-width: ${buttonWidth};

  margin: 0;
  padding: 0;

  border: ${buttonBorderSize} ${buttonBorderStyle} ${props => props.color};
  border-radius: ${buttonBorderRadiusSize};
  outline: none;
  cursor: pointer;

  font-size: 1em;
  font-family: ${buttonFontFamily};
  text-align: center;
  text-decoration: none;

  &:disabled {
    border: ${buttonBorderSize} ${buttonBorderStyle} ${props => chroma(props.color).luminance(0.6)};
    color: ${props => chroma(props.color).luminance(0.6)};
  }

  &:hover:enabled {
    background-color: ${buttonBackgroundColor};
    border: ${buttonBorderSize} ${buttonBorderStyle} ${props => chroma(props.color).darken(1)};
    color: ${props => chroma(props.color).darken(1)};
  }

  &:active:enabled {
    background: ${props => props.color};
    border-color: ${props => props.color};
    color: ${buttonBackgroundColor};
  }
`;

injectGlobal`
  ${Button} + ${Button} {
    margin-left: ${buttonSideBySideGap};
  }
`;

const UnstyledButtonGroup = ({ children, className, ...props }) => (
  <div className={className}>
    {React.Children.map(children, (button) => React.cloneElement(button, { ...props }))}
  </div>
);

export const ButtonGroup = styled(UnstyledButtonGroup).attrs({
  color: props => colors[props.color] || colors.default,
})`
	${Button} + ${Button} {
		border-left: 0;
		margin: 0;
	}

	${Button} + ${Button}:hover:enabled {
		border-left: ${buttonBorderSize} ${buttonBorderStyle} ${props => chroma(props.color).darken(1)};
		margin-left: -${buttonBorderSize};
	}

	${Button} + ${Button}:active:enabled {
		border-left: ${buttonBorderSize} ${buttonBorderStyle} ${props => props.color};
		margin-left: -${buttonBorderSize};
	}

	${Button}:first-child {
		border-radius: ${buttonBorderRadiusSize} 0 0 ${buttonBorderRadiusSize};
	}

	${Button}:last-child {
		border-radius: 0 ${buttonBorderRadiusSize} ${buttonBorderRadiusSize} 0;
	}

	*:not(:first-child):not(:last-child) {
		border-radius: 0;
	}
`;