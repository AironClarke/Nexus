import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  background-color: orange;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default StyledTaskbar;
