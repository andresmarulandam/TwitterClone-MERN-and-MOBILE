import { render, screen } from '@testing-library/react';
import User from './User';

import { getUser } from '../fixtures/user.fixture';
import { UserProvider } from '../containers/UserContext';

describe('User component', () => {
  test('render basic information', () => {
    const user = getUser();

    render(
      <UserProvider overrides={{ user }}>
        <User />
      </UserProvider>,
    );

    expect(screen.getByText(user.name)).toBeTruthy();
    expect(screen.getByText(`@${user.username}`)).toBeTruthy();
  });
});
