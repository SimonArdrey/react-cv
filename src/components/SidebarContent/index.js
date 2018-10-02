import React from 'react';
import Avatar from './components/Avatar';
import {
  SectionHeading,
  SidebarText,
  Center,
  NameText,
  RoleText,
  InfoIcon,
  SkillsSection,
} from './components/General';

export default () => (
  <React.Fragment>
    <Center>
      <Avatar fill={true} url="https://avatars1.githubusercontent.com/u/975413?s=400&v=4" />
      <NameText>Simon Ardrey</NameText>
      <RoleText>Senior Web Application Developer</RoleText>
    </Center>

    <InfoIcon as="span" icon="map-marker-alt">Gold Coast, Australia</InfoIcon>
    <InfoIcon as="span" icon="phone" flip="horizontal" >+61 413456882</InfoIcon>
    <InfoIcon as="span" icon="envelope">simonardrey@gmail.com</InfoIcon>
    <InfoIcon as="span" icon={['fab', 'github']}>simonardrey</InfoIcon>
    <InfoIcon as="span" icon={['fab', 'stack-overflow']}>simonardrey</InfoIcon>

    <section>
      <SectionHeading>Location</SectionHeading>
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
