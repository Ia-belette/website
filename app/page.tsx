import { About } from './components/about';
import { Footer } from './components/footer';
import { GridContainer } from './components/grid-container';
import { Header } from './components/header';
import { Posts } from './components/posts';
import { Projects } from './components/project';
import { RightSide } from './components/right-side';

export const runtime = 'edge';

export default function Home() {
  return (
    <GridContainer>
      <Header />
      <RightSide>
        <About />
        <Projects />
        <Posts />
        <Footer />
      </RightSide>
    </GridContainer>
  );
}
