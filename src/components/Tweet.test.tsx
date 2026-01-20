import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import Tweet from './Tweet';
import theme from '../theme';

describe('Tweet component', () => {
  test('render basic information', () => {
    const user = {
      name: 'Andrés Marulanda',
      username: 'amarulanda',
    };
    const content = 'Hello world';

    render(
      <ThemeProvider theme={theme}>
        <Tweet name={user.name} username={user.username} content={content} />
      </ThemeProvider>,
    );

    expect(screen.getByText(user.name)).toBeTruthy();
    expect(screen.getByText(`@${user.username}`)).toBeTruthy();
    expect(screen.getByText(content)).toBeTruthy();
  });
});
