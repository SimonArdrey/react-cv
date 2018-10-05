import React from 'react';
import {
  SummaryHeading,
  SectionHeading,
} from './components/General';
import {
  Text,
  Center
} from 'components/General';

export default () => (
  <React.Fragment>
    <section>
      <SummaryHeading>Summary</SummaryHeading>
      <Center>
        <Text>
          Ready to help your team; deliver an exceptional product.
        </Text>
        <Text style={{ textAlign: 'justify', width: '80%' }}>
          Innovative and passionate full stack lead application developer. With broad experience working in a start-up with modern tech and tooling on large scale applications. Looking to sink my teeth into an exciting project where I can apply my knowledge and drive to make a real difference. Known as the detective who solves issues when others struggle. Credited with having good foresight and of being instrumental in driving advancement. Quick to master a deep fundamental understanding of unfamiliar tech and domains.
        </Text>
      </Center>
    </section>
    <SectionHeading>Professional Experience</SectionHeading>
  </React.Fragment>
);
