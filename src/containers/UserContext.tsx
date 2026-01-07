import React, { createContext, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

type UserProps = {
  photo: string;
  name: string;
  username: string;
} | null;

interface UserContextType {
  user: UserProps;
  setUser: Dispatch<SetStateAction<UserProps>>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: (() => {}) as Dispatch<SetStateAction<UserProps>>,
});

export function UserProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [user, setUser] = useState<UserProps>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
