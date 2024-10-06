import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  backdrop-filter: ${({ theme }) => `blur(${theme.sizes.taskbar.blur})`};
  background-color: ${({ theme }) => theme.colors.taskbar};
  height: ${({ theme }) => theme.sizes.taskbar.height};
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default StyledTaskbar;
