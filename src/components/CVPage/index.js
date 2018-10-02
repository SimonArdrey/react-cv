import React from 'react';
import styled from 'styled-components';
import LineHeading from 'components/LineHeading';

export default () => (
  <React.Fragment>
    <SummaryHeading>Summary</SummaryHeading>
  </React.Fragment>
);

const SummaryHeading = styled(LineHeading).attrs({
  align: 'center',
  lineColor: '#eee',
})`
  font-size: 1em;
  font-weight: 400;
  color: #444;
`;
