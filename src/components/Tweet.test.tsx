import { screen } from '@testing-library/react';
import Tweet from './Tweet';
import { getTweet } from '../fixtures/tweet.fixture';
import { renderWithTheme } from '../test/utils';

describe('Tweet component', () => {
  test('render basic information', () => {
    const { user, content, createdAt } = getTweet();

    renderWithTheme(
      <Tweet
        name={user.name}
        username={user.username}
        photo={user.photo}
        content={content}
        createdAt={createdAt}
      />,
    );

    expect(screen.getByText(user.name)).toBeTruthy();
    expect(screen.getByText(`@${user.username}`)).toBeTruthy();
    expect(screen.getByText(content)).toBeTruthy();
  });
});
