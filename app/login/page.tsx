"use client";

import { useRouter } from "next/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import Emoji from "@atoms/Emoji";
import ContentContainer from "@atoms/ContentContainer";
import Input from "@molecules/Input";
import useForm from "hooks/useForm";
import routes from "constants/routes";

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
  const router = useRouter();
  const {
    submit,
    register,
    formState: { errors },
    isSubmitting,
  } = useForm<ILoginFormValues>({
    onSubmit: async (values) => console.log(values),
    resolver: yupResolver(loginFormSchema),
    successMessage: "You're logged in!",
    onSuccess: () => router.push(routes.home),
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
        <CardFooter>
          <Button
            variant="solid"
            colorScheme="purple"
            width="full"
            type="submit"
            isLoading={isSubmitting}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </ContentContainer>
  );
};

export default Login;
