import  { Navbar } from './components/Navbar';
import Slider from './components/Slider';

import styled from "styled-components";

function App() {
  const sliderItems = ['gutar', 'piano', 'ibanez', 'moog', 'roland', 'piano', 'ibanez', 'moog', 'roland', 'gutar', 'piano', 'ibanez', 'moog', 'roland', 'piano', 'ibanez', 'moog', 'roland', 'ibanez', 'moog', 'roland', 'piano', 'ibanez', 'moog', 'roland'];
  return (
    <Container>
      <Navbar />
      <Slider title='Save an avg' items={sliderItems} />
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid red;
`
export default App;
