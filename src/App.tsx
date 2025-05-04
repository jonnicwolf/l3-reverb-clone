import  { Navbar } from './components/Navbar';


import styled from "styled-components";

function App() {
  return (
    <Container>
      <Navbar />
      
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid red;
`
export default App;
