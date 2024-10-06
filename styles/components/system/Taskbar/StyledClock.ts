import styled from 'styled-components';

// const centered = `
//   display: flex;
//   place-content: center;
//   place-items: center
// `

const StyledClock = styled.time`
  background-color: green;
  height: 100%;
  width: ${({ theme }) => theme.sizes.clock.width};
  position: absolute;
  right: 0;
  display: flex;
  place-content: center;
  place-items: center;
  font-size: ${({ theme }) => theme.fonts.clock.size};
  color: ${({ theme }) => theme.colors.clockText};
`;
export default StyledClock;
