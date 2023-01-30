import { ReactNode } from "react";
import {
  LoginUserMutationVariables,
  MeDocument,
  RegisterUserMutationVariables,
  useLoginUserMutation,
  useMeQuery,
} from "services/graphql";
import storage from "services/storage";
import AuthContext, { IAuthContext } from "./AuthContext";

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const { data: user } = useMeQuery();
  const [loginUserMutation] = useLoginUserMutation();

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

  const onLogout = async () => {};

  const onRegister = async ({
    name,
    email,
    password,
  }: RegisterUserMutationVariables) => {};

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