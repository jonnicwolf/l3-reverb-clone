import  { Navbar } from './components/Navbar';
import Slider from './components/Slider';
import ContentRail from './components/ContentRail';
import Rail from './components/Rail';
import Card_Normal from './components/Card_Normal';
import styled from "styled-components";

import { mockItems } from './assets/content';

function App() {
  const sliderItems = ['gutar', 'piano', 'ibanez', 'moog', 'roland', 'piano', 'ibanez', 'moog', 'roland', 'gutar', 'piano', 'ibanez', 'moog', 'roland', 'piano', 'ibanez', 'moog', 'roland', 'ibanez', 'moog', 'roland', 'piano', 'ibanez', 'moog', 'roland'];
  const testItems = [
    {
      "id": 1,
      "imageUrl": "https://example.com/images/fender-del-mar.jpg",
      "price": "$250",
      "label": "1995 Fender Del Mar"
    },
    {
      "id": 2,
      "imageUrl": "https://example.com/images/fly-nylon.jpg",
      "price": "$11,000",
      "label": "Parker Pre Refined Fly Nylon"
    },
    {
      "id": 3,
      "imageUrl": "https://example.com/images/guild-westerly.jpg",
      "price": "$2,250",
      "label": "Guild D55 1997 Westerly"
    },
    {
      "id": 4,
      "imageUrl": "https://example.com/images/ghost-label.jpg",
      "price": "$2,798.79",
      "label": "Guild F20 1959 Ghost Label"
    },
    {
      "id": 5,
      "imageUrl": "https://example.com/images/martin-d18.jpg",
      "price": "$34,645",
      "label": "Martin D-18 (Previously Owned by Norman Blake)",
      "featured": true
    },
    {
      "id": 6,
      "imageUrl": "https://example.com/images/martin-d35.jpg",
      "price": "$1,599",
      "label": "2006 Martin D35 Dreadnought"
    },
  ]

  const test = testItems.map(((item, i) => {
    const { imageUrl, price, label } = item;
    return (
      <Card_Normal
        id={i}
        imageUrl={imageUrl}
        price={price}
        label={label}
      />
    )
  }
))
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
 
`;
export default App;
