import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons'

import Avatar from './components/Avatar';
import {
  SectionHeading,
  SidebarText,
  Center,
  NameText,
  RoleText,
  InfoIcon,
  SkillsSection,
  ExternalLink,
} from './components/General';

library.add(faCaretRight);

export default () => (
  <React.Fragment>
    <Center>
      <Avatar fill={true} url="https://avatars1.githubusercontent.com/u/975413?s=400&v=4" />
      <NameText>Simon Ardrey</NameText>
      <RoleText>Senior Web Application Developer</RoleText>
    </Center>

    <InfoIcon icon="map-marker-alt">
      <ExternalLink href="https://www.google.com/maps/place/Gold+Coast+QLD,+Australia/@-27.9539379,153.0891707,10z/data=!3m1!4b1!4m5!3m4!1s0x6b911a472b5d60b7:0x302a35af3deaf70!8m2!3d-28.016667!4d153.4">Gold Coast, Australia</ExternalLink>
    </InfoIcon>
    <InfoIcon icon="phone" flip="horizontal">
      <ExternalLink href="tel:+61 413456882">(+61) 0413456882</ExternalLink>
    </InfoIcon>
    <InfoIcon icon="envelope">
      <ExternalLink href="mailto:simonardrey@gmail.com">simonardrey@gmail.com</ExternalLink>
    </InfoIcon>
    <InfoIcon icon={['fab', 'github']}>
      <ExternalLink href="https://github.com/SimonArdrey">simonardrey</ExternalLink>
    </InfoIcon>
    <InfoIcon icon={['fab', 'stack-overflow']}>
      <ExternalLink href="https://stackoverflow.com/cv/simon.ardrey">simonardrey</ExternalLink>
    </InfoIcon>

    <section>
      <SectionHeading>
        <FontAwesomeIcon icon="caret-right" fixedWidth transform={{ rotate: 90 }} />
        Location
      </SectionHeading>
      <article>
        <SidebarText>Remote and location independent. Willing to travel or relocate.</SidebarText>
      </article>
    </section>

    <section>
      <SectionHeading>Expertise</SectionHeading>
      <article>
        <SidebarText>
          <ul style={{ paddingLeft: '1.5em' }}>
            <li>Software Architecture</li>
            <li>Techlead</li>
            <li>Start-ups / Entrepreneurship</li>
            <li>Training &amp; Mentoring</li>
            <li>Outsourcing / Offshore Development</li>
            <li>Data Mining / Business Intelligence</li>
            <li>Research and Development</li>
            <li>Deployment / Release Management</li>
            <li>QA &amp; UAT Management</li>
            <li>Best Practices / Design Patterns</li>
          </ul>
        </SidebarText>
      </article>
    </section>

    <section>
      <SectionHeading>Skills</SectionHeading>
      <article>
        <SkillsSection title="Languages">
          Javascript (ES6), NodeJS, PHP, MySQL Query/Procedures, C#
        </SkillsSection>

        <SkillsSection title="Database">
          MySQL, PostgreSQL, AWS DynamoDB, Firebird/Interbase, MongoDB
        </SkillsSection>

        <SkillsSection title="Frameworks / Libraries">
          Back-end: HapiJS, ExpressJS, Webpack, Mocha, Yii, Laravel<br />
          Front-end: ReactJS, RiotJS, JQuery<br />
          and more
        </SkillsSection>

        <SkillsSection title="Platforms / Deployment / DVCS">
          AWS (EC2, Beanstalk, S3, SQS, SES, Lambda), Codeship, Git, Mercurial, many thrid-party services and APIs
        </SkillsSection>

        <SkillsSection title="Management Tools">
          Jira, Sprintly, Github, BitBucket, Confluence, Trello, SourceTree, Slack, and more
        </SkillsSection>
      </article>
    </section>
  </React.Fragment>
);
