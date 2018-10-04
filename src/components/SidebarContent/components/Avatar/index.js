import styled from 'styled-components';
import Image from 'components/Image';

export default styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #ccc;
  position: relative;
  background-color: #000;
  transition: all 0.4s;
  margin: 4px;

  &:hover {
    border: 8px solid #ddd;
    margin: 0;
  }
`;
