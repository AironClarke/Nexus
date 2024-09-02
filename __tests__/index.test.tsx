import { render } from '@testing-library/react';
import Home from 'pages/index';

test('renders index page', () => {
  const { getByText } = render(<Home />);
  const helloWorldElement = getByText('Hello, world!');

  expect(helloWorldElement).toBeInTheDocument();
});
