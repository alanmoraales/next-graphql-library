"use client";

import { forwardRef } from "react";
import {
  FormControl,
  FormErrorMessage,
  InputProps,
  Input as BaseInput,
  FormLabel,
} from "@chakra-ui/react";
import { When } from "react-if";

interface IInputProps extends InputProps {
  name: string;
  label?: string;
  errorMessage?: string;
  hasError?: boolean;
}

// Eslint doesn't recognize the component's name due the use of forwardRef
// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    { name, label = "", hasError = false, errorMessage, ...inputProps },
    ref
  ) => (
    <FormControl isInvalid={hasError}>
      <When condition={label}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
      </When>
      <BaseInput
        id={name}
        name={name}
        ref={ref}
        as={BaseInput}
        {...inputProps}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
);

export default Input;
