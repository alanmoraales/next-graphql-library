import { createContext } from "react";
import {
  LoginUserMutationVariables,
  RegisterUserMutationVariables,
  MeQuery,
} from "services/graphql";

interface IAuthContext {
  user?: MeQuery["me"];
  isLoadingUser: boolean;
  isLoggedIn: boolean;
  onLogin: (loginParams: LoginUserMutationVariables) => Promise<void>;
  onLogout: () => void;
  onRegister: (registerParams: RegisterUserMutationVariables) => Promise<void>;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export type { IAuthContext };
export default AuthContext;
