import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

type Direction = 'left' | 'right';
type Props = {
  title: string,
  items: string[]
};

const Slider: React.FC<Props> = ({ title, items }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [atEnd, setAtEnd] = useState(false);

  const handleScroll = () => {
    const current = sliderRef.current;
    if (current) {
      setScrollLeft(current.scrollLeft);
      const isEnd = current.scrollLeft + current.clientWidth >= current.scrollWidth - 1;
      setAtEnd(isEnd);
    };
  };

  const scroll = (direction: Direction) => {
    const current = sliderRef.current;
    if (current) {
      current.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
      setTimeout(handleScroll, 300);
    };
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <SliderContainer>
        {scrollLeft !== 0 && <ArrowButton onClick={() => scroll('left')}>◀</ArrowButton>}
        <SliderWrapper ref={sliderRef} onScroll={handleScroll}>
          {items.map((item, i) => (
            <Item key={i}>{item}</Item>
          ))}
        </SliderWrapper>
        {!atEnd && <ArrowButton onClick={() => scroll('right')}>▶</ArrowButton>}
      </SliderContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
const Title = styled.h1`
  align-self: start;
`;
const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
`;
const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  padding: 0 0.5rem;
`;
const SliderWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 1rem 0;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
const Item = styled.div`
  min-width: 100px;
  min-height: 100px;
  background-color: #ddd;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  flex-shrink: 0;
`;

export default Slider;
