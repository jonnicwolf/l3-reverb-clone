import styled from "styled-components"

type Props = {}

export const Navbar = (props: Props) => {
  return (
    <Container>
      <Content>
        <span>yo</span>
        <span>yo</span>
        <span>yo</span>
      </Content>
      <Content>
        <span>yo</span>
        <span>yo</span>
        <span>yo</span>
      </Content>
      <Content>
        <span>yo</span>
        <span>yo</span>
        <span>yo</span>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Content = styled.span`
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
`;
