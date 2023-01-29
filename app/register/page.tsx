"use client";

import { useRouter } from "next/navigation";
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

interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
}

const registerFormSchema = yup.object().shape({
  name: yup.string().required("The name is required"),
  email: yup
    .string()
    .required("The email is required")
    .email("The email is not valid"),
  password: yup.string().required("The password is required"),
});

const Register = () => {
  const router = useRouter();
  const {
    submit,
    register,
    formState: { errors },
    isSubmitting,
  } = useForm<IRegisterFormValues>({
    onSubmit: async (values) => console.log(values),
    resolver: yupResolver(registerFormSchema),
    successMessage: "You're registered and logged in!",
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
            <Emoji name="callMeHand" /> {`You're almost there`}
          </Heading>
        </CardHeader>
        <CardBody display="grid" gap={4}>
          <Input
            label="Name"
            placeholder="Your Name"
            {...register("name")}
            hasError={Boolean(errors.name)}
            errorMessage={errors.name?.message}
          />
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
            Register
          </Button>
          <Text>
            Already have an account?{" "}
            <Link as={NextLink} href={routes.login} color="purple.500">
              login here
            </Link>
            .
          </Text>
        </CardFooter>
      </Card>
    </ContentContainer>
  );
};

export default Register;
