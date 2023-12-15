import { About } from './components/about';
import { GridContainer } from './components/grid-container';
import { Header } from './components/header';
import { RightSide } from './components/right-side';

export default function Home() {
  return (
    <GridContainer>
      <Header />
      <RightSide>
        <About />
      </RightSide>
    </GridContainer>
  );
}
