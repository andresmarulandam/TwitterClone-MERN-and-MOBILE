import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import Tweet from './Tweet';
import theme from '../theme';
import { getTweet } from '../fixtures/tweet.fixture';

describe('Tweet component', () => {
  test('render basic information', () => {
    const { user, content, createdAt } = getTweet();

    render(
      <ThemeProvider theme={theme}>
        <Tweet
          name={user.name}
          username={user.username}
          photo={user.photo}
          content={content}
          createdAt={createdAt}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText(user.name)).toBeTruthy();
    expect(screen.getByText(`@${user.username}`)).toBeTruthy();
    expect(screen.getByText(content)).toBeTruthy();
  });
});
