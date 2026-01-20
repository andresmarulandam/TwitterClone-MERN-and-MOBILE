import { ThemeProvider } from '@emotion/react';
import theme from '../theme';
import { render } from '@testing-library/react';

export function renderWithTheme(children: React.ReactNode) {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
