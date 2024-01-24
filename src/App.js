import './App.css';
import styled from 'styled-components';

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

function App() {
  return (
    <>
      <StBox borderColor="red">빨간박스</StBox>
      <StBox borderColor="blue">파란박스</StBox>
      <StBox borderColor="green">초록박스</StBox>
    </>
  );
}

export default App;
