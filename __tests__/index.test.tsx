import { render, screen } from '@testing-library/react';
import Home from 'pages/index';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'themes/default.json';

test('renders index page', () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
  const helloWorldElement = screen.getByText('Hello, world!');

  expect(helloWorldElement).toBeInTheDocument();
});
