import styled from 'styled-components';

const StyledStartButton = styled.button.attrs({
  type: 'button'
})`
  background-color: red;
  height: 100%;
  width: ${({ theme }) => theme.sizes.startButton.width};
  position: absolute;
  left: 0;
  display: flex;
  place-content: center;
  place-items: center;
  color: ${({ theme }) => theme.colors.startButton};
  font-size: ${({ theme }) => theme.sizes.startButton.iconSize};

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbarHover};

    svg {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export default StyledStartButton;
