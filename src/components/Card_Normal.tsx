import styled from "styled-components";

type Props = {
  id: number,
  imageUrl: string,
  price: string,
  label: string;
};

const Card_Normal: React.FC<Props> = ({ id, imageUrl, price, label }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={imageUrl} alt={label} width="100%" height="100%" />
      </ImageWrapper>
      <CardFooter>
        <Price>{price}</Price>
        <Label>{label}</Label>
      </CardFooter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 auto;
  width: 280px;
  height: auto;
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

export default Card_Normal;
