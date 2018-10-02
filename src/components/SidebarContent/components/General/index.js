import React from 'react';
import styled from 'styled-components';
import { Text, HeadingText } from 'components/General';
import LineHeading from 'components/LineHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SidebarText = styled(Text)`
  color: ${props => props.theme.sidebar.fg};
`;

export const SidebarHeadingText = styled(HeadingText)`
  color: ${props => props.theme.sidebar.fg};
`;

const SectionLineHeading = styled(LineHeading).attrs({
  lineColor: '#fff',
})`
  font-weight: 400;
  font-size: 1.4em;
  margin: 1.5em 0 0.8em 0;
`;

export const SectionHeading = ({ children }) => (
  <SectionLineHeading>
    <SidebarHeadingText weight={700}>{children}</SidebarHeadingText>
  </SectionLineHeading>
);

export const Center = styled.div`
  text-align: center;
`;

export const NameText = styled(SidebarHeadingText)`
  font-size: 2em;
  text-transform: uppercase;
  margin: 0.3em 0;
`;

export const RoleText = styled(SidebarHeadingText)`
  font-size: 1.5em;
  font-style: italic;
  text-transform: uppercase;
  margin: 0.5em 0;
`;

const InfoIconContainer = styled.div`
  margin: 0.4em 0;
`;

const InfoIconText = styled(SidebarText)`
  padding-left: 0.5em;
  margin: 0;
  display: inline;
`;

export const InfoIcon = ({ children, icon, ...props }) => (
  <InfoIconContainer>
    <FontAwesomeIcon icon={icon} fixedWidth {...props} />
    <InfoIconText>{children}</InfoIconText>
  </InfoIconContainer>
);

export const SkillsSection = ({ title, children }) => (
  <React.Fragment>
    <SidebarText my={1} size={0.9} weight={700}>{title}</SidebarText>
    <SidebarText weight={200} size={0.9}>
      {children}
    </SidebarText>
  </React.Fragment>
);
