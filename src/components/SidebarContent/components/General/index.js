import React from 'react';
import styled from 'styled-components';
import { Text, HeadingText } from 'components/General';
import LineHeading from 'components/LineHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SidebarText = styled(Text)`
  color: ${props => props.theme.sidebar.fg};
  font-size: 0.9em;
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

export const NameText = styled(SidebarHeadingText)`
  font-size: 2em;
  text-transform: uppercase;
  margin: 0.3em 0 0.2em 0;
`;

export const RoleText = styled(SidebarText)`
  font-size: 1.4em;
  font-style: italic;
  font-weight: 300;
  text-transform: uppercase;
  margin: 0.2em 0 0.8em 0;
`;

const InfoIconContainer = styled.div`
  margin: 0.4em 0;
`;

const InfoIconText = styled(SidebarText).attrs({
  as: 'span',
})`
  padding-left: 0.5em;
  font-size: 0.9em;
`;

export const InfoIcon = ({ children, icon, ...props }) => (
  <InfoIconContainer>
    <FontAwesomeIcon icon={icon} fixedWidth {...props} />
    <InfoIconText>{children}</InfoIconText>
  </InfoIconContainer>
);

export const SkillsSection = ({ title, children }) => (
  <React.Fragment>
    <SidebarText my={1} weight={700}>{title}</SidebarText>
    <SidebarText weight={200} size={0.9}>
      {children}
    </SidebarText>
  </React.Fragment>
);

export const ExternalLink = styled.a.attrs({
  target: '_blank',
})`
  color: ${props => props.theme.sidebar.fg};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;