import styled from 'styled-components';

const StyledDesktop = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;
export default StyledDesktop;
