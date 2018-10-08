import React from 'react';
import styled from 'styled-components';
import { HeadingText } from 'components/General';
import LineHeading from 'components/LineHeading';

const SectionLineHeading = styled(LineHeading).attrs({
  lineColor: '#dedede',
})`
  color: #555;
  font-weight: 700;
  font-size: 1.4em;
  margin: 0 0 0.8em 0;
`;

export const SectionHeading = ({ children, align }) => (
  <SectionLineHeading align={align}>
    <HeadingText weight={700} color="#555">{children}</HeadingText>
  </SectionLineHeading>
);

export const SummaryHeading = styled(LineHeading).attrs({
  align: 'center',
  lineColor: '#dedede',
})`
  font-size: 1.4em;
  font-weight: 700;
  color: #555;
`;