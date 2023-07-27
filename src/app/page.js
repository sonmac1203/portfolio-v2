import { CoreContainer, LeftColumn, RightColumn } from '@/lib/components';
import {
  Introduction,
  Nav,
  ContactFooter,
  TechFooter,
  MainSections,
} from '@/components/home';
import { SectionObserverProvider } from '@/lib/providers';

export default function Home() {
  return (
    <CoreContainer>
      <SectionObserverProvider>
        <LeftColumn>
          <Introduction />
          <Nav />
          <ContactFooter />
        </LeftColumn>
        <RightColumn>
          <MainSections />
          <TechFooter />
        </RightColumn>
      </SectionObserverProvider>
    </CoreContainer>
  );
}
