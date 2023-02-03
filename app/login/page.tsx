"use client";

import NextLink from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import Emoji from "@atoms/Emoji";
import ContentContainer from "@atoms/ContentContainer";
import Input from "@molecules/Input";
import useForm from "hooks/useForm";
import routes from "constants/routes";
import useAuthContext from "context/AuthContext";

interface ILoginFormValues {
  email: string;
  password: string;
}

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("The email is required")
    .email("The email is not valid"),
  password: yup.string().required("The password is required"),
});

const Login = () => {
  const { onLogin, onLoginOrRegisterSuccess } = useAuthContext();
  const {
    submit,
    register,
    formState: { errors },
    isSubmitting,
  } = useForm<ILoginFormValues>({
    onSubmit: onLogin,
    resolver: yupResolver(loginFormSchema),
    successMessage: "You're logged in!",
    onSuccess: onLoginOrRegisterSuccess,
  });

  return (
    <ContentContainer alignItems="center">
      <Card
        padding={4}
        variant="outline"
        maxW="450px"
        width="100%"
        as="form"
        onSubmit={submit}
      >
        <CardHeader>
          <Heading size="lg">
            <Emoji name="wavingHand" /> Welcome back
          </Heading>
        </CardHeader>
        <CardBody display="grid" gap={4}>
          <Input
            type="email"
            label="Email"
            placeholder="example@email.com"
            {...register("email")}
            hasError={Boolean(errors.email)}
            errorMessage={errors.email?.message}
          />
          <Input
            type="password"
            label="Password"
            placeholder="********"
            {...register("password")}
            hasError={Boolean(errors.password)}
            errorMessage={errors.password?.message}
          />
        </CardBody>
        <CardFooter display="grid" gap={6}>
          <Button
            variant="solid"
            colorScheme="purple"
            width="full"
            type="submit"
            isLoading={isSubmitting}
          >
            Login
          </Button>
          <Text>
            {`Don't have an account?`}{" "}
            <Link as={NextLink} href={routes.register} color="purple.500">
              register here
            </Link>
            .
          </Text>
        </CardFooter>
      </Card>
    </ContentContainer>
  );
};

export default Login;
