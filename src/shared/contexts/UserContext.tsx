import type { FC, ReactElement } from "react";
import {
  createContext,
  useMemo,
  useState,
} from "react";

import { useRouter } from "next/router";

interface UserProfile {
  role_id: string;
  user_id: string;
}

interface UserContextType {
  isLoading: boolean | null;
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
}


export const UserContext = createContext<UserContextType>({
  user: null,
  isLoading: null,
  setUser: (user: UserProfile | null) => user,
});

export const UserContextProvider: FC<{ children: ReactElement }> = (props) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  const router = useRouter();



  const userContext = useMemo<UserContextType>(
    () => ({
      user,
      isLoading,
      setUser,
    }),
    [
      isLoading,
      user,
    ]
  );

  return (
    <UserContext.Provider value={userContext}>
      {user ? (
        props.children
      ) : (
        props.children
      )}
    </UserContext.Provider>
  );
};
