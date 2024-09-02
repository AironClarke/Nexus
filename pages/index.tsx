import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: ${({ theme }) => theme.colors.secondary};
`;

// Use Title and Wrapper like any other React component – except they're styled!

export default function Home() {
  return <Title>Hello, world!</Title>;
}
