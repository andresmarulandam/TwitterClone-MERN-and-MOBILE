import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import Tweet from './Tweet';
import theme from '../theme';
import { getUser } from '../fixtures/user.fixture';

describe('Tweet component', () => {
  test('render basic information', () => {
    const user = getUser();
    const content = 'Hello world';

    console.log(user);
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
