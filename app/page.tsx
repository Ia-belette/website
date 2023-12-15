import { About } from './components/about';
import { Footer } from './components/footer';
import { GridContainer } from './components/grid-container';
import { Header } from './components/header';
import { Projects } from './components/project';
import { RightSide } from './components/right-side';

export default function Home() {
  return (
    <GridContainer>
      <Header />
      <RightSide>
        <About />
        <Projects />
        <Footer />
      </RightSide>
    </GridContainer>
  );
}
