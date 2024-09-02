import { render } from '@testing-library/react';
import Home from 'pages/index';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'themes/default.json';

test('renders index page', () => {
  const { getByText } = render(
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
  const helloWorldElement = getByText('Hello, world!');

  expect(helloWorldElement).toBeInTheDocument();
});
