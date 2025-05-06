import  { Navbar } from './components/Navbar';
import Slider from './components/Slider';
import ContentRail from './components/ContentRail';
import Rail from './components/Rail';

import styled from "styled-components";

import { mockItems } from './assets/content';

function App() {
  const sliderItems = ['gutar', 'piano', 'ibanez', 'moog', 'roland', 'piano', 'ibanez', 'moog', 'roland', 'gutar', 'piano', 'ibanez', 'moog', 'roland', 'piano', 'ibanez', 'moog', 'roland', 'ibanez', 'moog', 'roland', 'piano', 'ibanez', 'moog', 'roland'];

  const test = [
    <div>yo</div>,
    <div>yo</div>,
    <div>yo</div>,
    <div>yo</div>,
    <div>yo</div>,
    <div>yo</div>,
    <div>yo</div>,
    <div>yo</div>,
    <div>yo</div>,
    <div>yo</div>,
    <div>yo</div>,
  ]


  return (
    <Container>
      <Navbar />
      <Slider title='Save an avg' items={sliderItems} />
      <ContentRail title="Most watched Guitars" items={mockItems} />
      <Rail cards={test} />
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid red;
`
export default App;
