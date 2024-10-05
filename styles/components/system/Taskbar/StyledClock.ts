import styled from 'styled-components';

const StyledClock = styled.time`
  background-color: green;
  height: 100%;
  width: ${({ theme }) => theme.sizes.clock.width};
  position: absolute;
  right: 0;
`;
export default StyledClock;
