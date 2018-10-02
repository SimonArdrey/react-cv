import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import PropTypes from 'prop-types';

const MiddleLine = styled.div`
  height: 50%;
  width: 100%;
  border-bottom: 1px solid ${props => props.lineColor || '#000'};
`;

const LineHeading = ({ children, align, className, lineColor }) => (
  <Flex className={className}>
    {align === 'center' || align === 'right' ? <Box auto><MiddleLine lineColor={lineColor} /></Box> : null}
    <Box
      ml={align === 'center' || align === 'right' ? 1 : 0}
      mr={align === 'center' || align === 'left' ? 1 : 0}
    >
      {children}
    </Box>
    {align === 'center' || align === 'left' ? <Box auto><MiddleLine lineColor={lineColor} /></Box> : null}
  </Flex>
);
LineHeading.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  lineColor: PropTypes.string,
};
LineHeading.defaultProps = {
  align: 'left',
  lineColor: '#000',
};

export default LineHeading;

