import styled from 'styled-components';

const StyledStartButton = styled.button`
  background-color: red;
  height: 100%;
  width: ${({ theme }) => theme.sizes.startButton.width};
  position: absolute;
  left: 0;
  display: flex;
  place-content: center;
  place-items: center;
`;

export default StyledStartButton;
