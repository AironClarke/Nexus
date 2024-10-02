import { render, screen } from '@testing-library/react';
import StyledApp from 'components/pages/StyledApp';
import Index from 'pages/index';

test('renders index page', () => {
  render(
    <StyledApp>
      <Index />
    </StyledApp>
  );

  expect(screen.getByText('Hello, world!')).toBeInTheDocument();
});
