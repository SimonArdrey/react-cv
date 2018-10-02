import styled from 'styled-components';
import Image from 'components/Image';

export default styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #ccc;
  position: relative;
  background-color: #000;

  &:after {
    position: absolute;
    height: 20px;
    line-height: 20px;
    width: 100%
    bottom: 0;
    left: 0;
    text-align: center;
    background-color: #000;
    display: inline-block;
    content: "Change";
    visibility: hidden;
  }

  &:hover {
    &:after {
      visibility: visible;
    }
  }
`;
