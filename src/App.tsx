import  { Navbar } from './components/Navbar';
import Slider from './components/Slider';
import ContentRail from './components/ContentRail';

import styled from "styled-components";

import { mockItems } from './assets/content';

function App() {
  const sliderItems = ['gutar', 'piano', 'ibanez', 'moog', 'roland', 'piano', 'ibanez', 'moog', 'roland', 'gutar', 'piano', 'ibanez', 'moog', 'roland', 'piano', 'ibanez', 'moog', 'roland', 'ibanez', 'moog', 'roland', 'piano', 'ibanez', 'moog', 'roland'];


  return (
    <Container>
      <Navbar />
      <Slider title='Save an avg' items={sliderItems} />
      <ContentRail title="Most watched Guitars" items={mockItems} />
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid red;
`
export default App;
