import { SessionContext } from 'context/session';
import { type FC, type PropsWithChildren, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyles';
import themes from 'styles/themes';

const StyledApp: FC<PropsWithChildren> = ({ children }) => {
  const { themeName } = useContext(SessionContext);

  return (
    <ThemeProvider theme={themes[themeName] || themes.defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledApp;
