"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import {
  LoginUserMutationVariables,
  MeDocument,
  RegisterUserMutationVariables,
  useLoginUserMutation,
  useMeQuery,
  useRegisterUserMutation,
} from "services/graphql";
import AuthContext, { IAuthContext } from "./AuthContext";
import storage from "services/storage";
import routes from "constants/routes";

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const router = useRouter();
  const { data: user, loading } = useMeQuery({
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
    window.location.reload();
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

  const onLoginOrRegisterSuccess = () => {
    router.push(routes.home);
  };

  const contextValue: IAuthContext = {
    user: user?.me,
    isLoadingUser: loading,
    isLoggedIn: Boolean(user),
    onLogin,
    onLogout,
    onRegister,
    onLoginOrRegisterSuccess,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
