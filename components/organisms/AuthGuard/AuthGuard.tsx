"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import useAuthContext from "context/AuthContext";
import routes from "constants/routes";
import { When } from "react-if";

const publicRoutes = [routes.login, routes.register, routes.home];

const redirectToHomeIfLoggedInRoutes = [routes.login, routes.register];

interface IAuthGuardProps {
  children: React.ReactNode;
}

/**
 *
 * Manages FOUC (Flash of Unauthenticated Content) and redirects to login page
 * if user is not logged in and tries to access private routes,
 * redirect to home page if user is logged in and tries to access login or register pages
 */
const AuthGuard = ({ children }: IAuthGuardProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoadingUser, isLoggedIn } = useAuthContext();

  useEffect(() => {
    if (
      !isLoadingUser &&
      !isLoggedIn &&
      pathname &&
      !publicRoutes.includes(pathname)
    ) {
      router.push(routes.login);
    }

    if (
      !isLoadingUser &&
      isLoggedIn &&
      pathname && // pathname can be null
      redirectToHomeIfLoggedInRoutes.includes(pathname)
    ) {
      router.push(routes.home);
    }
  }, [isLoadingUser, isLoggedIn, pathname, router]);

  return (
    <When
      condition={
        !isLoadingUser &&
        pathname && // pathname can be null
        ((!isLoggedIn && publicRoutes.includes(pathname)) ||
          (isLoggedIn && !redirectToHomeIfLoggedInRoutes.includes(pathname)))
      }
    >
      {children}
    </When>
  );
};

export default AuthGuard;
