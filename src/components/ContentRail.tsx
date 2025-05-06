import { useMemo } from "react";
import styled from "styled-components";

interface Item {
  id: number,
  imageUrl: string,
  price: number,
  label: string;
};

type Props = {
  title: string,
  items: Item[]
};

const ContentRail: React.FC<Props> = ({title, items}) => {
  const { group1, featured, group2 } = useMemo(() => {
    const group1: Item[] = [];
    const featured: Item[] = [];
    const group2: Item[] = [];

    items.forEach((item, i) => {
      if (i === 4) featured.push(item);
      else if (i < 4) group1.push(item);
      else group2.push(item);
    });

    return { group1, featured, group2 };
  }, [items]);
  
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <FourBox>
          {group1.map((item,i) => (
            <ItemCard key={i} featured={false}>
              <ImageWrapper>
                <img src={item.imageUrl} alt={item.label} width="100%" height="100%" />
              </ImageWrapper>
              <CardFooter>
                <Price>{item.price}</Price>
                <Label>{item.label}</Label>
              </CardFooter>
            </ItemCard>
          ))}
        </FourBox>

        <span>
          {featured.map(item => (
            <ItemCard key={20} featured={true}>
              <ImageWrapper>
                <img src={item.imageUrl} alt={item.label} width="100%" height="100%" />
              </ImageWrapper>
              <CardFooter>
                <Price>{item.price}</Price>
                <Label>{item.label}</Label>
              </CardFooter>
            </ItemCard>
          ))}
        </span>

        <FourBox>
          {group2.map((item, i) => (
              <ItemCard key={i} featured={false}>
                <ImageWrapper>
                  <img src={item.imageUrl} alt={item.label} width="100%" height="100%" />
                </ImageWrapper>
                <CardFooter>
                  <Price>{item.price}</Price>
                  <Label>{item.label}</Label>
                </CardFooter>
              </ItemCard>
            ))}
        </FourBox>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
const Title = styled.h1``
;
const Content = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;
  scrollbar-width: none;
  align-self: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ItemCard = styled.div<{ featured?: boolean }>`
  flex: 0 0 auto;
  width: ${({ featured }) => (featured ? '400px' : '300px')};
  height: ${({ featured }) => (featured ? '100%' : '200px')};
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 120px;
  object-fit: cover;
  background: #eee;
`;
const CardFooter = styled.div`
  padding: 0.5rem;
  font-size: 0.9rem;
`;
const Price = styled.div`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;
const Label = styled.div`
  color: #555;
`;
const FourBox = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
`;

export default ContentRail;
