// import react from 'react';
import styled, { keyframes } from 'styled-components';
import chroma from 'chroma-js';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const defaults = {
  size: '1.5em',
  color: '#777',
};

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 1em;
  height: 1em;
  font-size: ${(props) => props.size || defaults.size};

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    
    width: calc(1em - 6px);
    height: calc(1em - 6px);
    margin: 0px;
    border-radius: 50%;
    border: 3px solid;
    border-color: ${(props) => chroma(props.color || defaults.color).brighten(5)} transparent transparent transparent;
    animation: ${rotate} 0.6s linear infinite;
  }

  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(1em - 6px);
    height: calc(1em - 6px);;
    margin: 0px;
    border-radius: 50%;
    border: 3px solid ${(props) => props.color || defaults.color};
  }
`;

export default Spinner;
