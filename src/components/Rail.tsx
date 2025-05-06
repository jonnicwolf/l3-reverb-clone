import styled from "styled-components";

type Props = {
  cards: React.ReactNode[];
};


const Rail: React.FC<Props> = ({ cards }) => {
  return (
    <WrapperExt>

      {cards.map(card => (
        card
      ))}
    </WrapperExt>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`
const WrapperExt = styled(Wrapper)`
  flex-direction: row;
`

export default Rail;
