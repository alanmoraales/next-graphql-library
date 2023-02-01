"use client";

import { ReactNode } from "react";
import {
  LoginUserMutationVariables,
  MeDocument,
  RegisterUserMutationVariables,
  useLoginUserMutation,
  useMeQuery,
  useRegisterUserMutation,
} from "services/graphql";
import storage from "services/storage";
import AuthContext, { IAuthContext } from "./AuthContext";

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const { data: user, client } = useMeQuery({
    errorPolicy: "ignore",
  });
  const [loginUserMutation] = useLoginUserMutation();
  const [registerUserMutation] = useRegisterUserMutation();

  const onLogin = async (loginParams: LoginUserMutationVariables) => {
    const authResponse = await loginUserMutation({
      variables: loginParams,
      update: (cache, { data }) => {
        cache.writeQuery({
          query: MeDocument,
          data: {
            me: data?.loginUser.user,
          },
        });
      },
    });
    const token = authResponse.data?.loginUser.token;
    if (token) {
      storage.setUserToken(token);
    }
  };

  const onLogout = () => {
    storage.removeUserToken();
    client.resetStore();
  };

  const onRegister = async (registerParams: RegisterUserMutationVariables) => {
    const authResponse = await registerUserMutation({
      variables: registerParams,
      update: (cache, { data }) => {
        cache.writeQuery({
          query: MeDocument,
          data: {
            me: data?.registerUser.user,
          },
        });
      },
    });
    const token = authResponse.data?.registerUser.token;
    if (token) {
      storage.setUserToken(token);
    }
  };

  const contextValue: IAuthContext = {
    user: user?.me,
    isLoggedIn: Boolean(user),
    onLogin,
    onLogout,
    onRegister,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
