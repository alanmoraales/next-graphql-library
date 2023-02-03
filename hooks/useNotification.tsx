import { useToast } from "@chakra-ui/react";

interface INotify {
  title?: string;
  description: string;
  duration?: number;
  isClosable?: boolean;
}

const useNotification = () => {
  const displayToast = useToast();

  const success = ({
    title = "Ready",
    description,
    duration = 5000,
    isClosable = true,
  }: INotify) =>
    displayToast({
      status: "success",
      title,
      description,
      duration,
      isClosable,
      position: "top-right",
    });

  const error = ({
    title = "We're sorry",
    description,
    duration = 5000,
    isClosable = true,
  }: INotify) =>
    displayToast({
      status: "error",
      title,
      description,
      duration,
      isClosable,
      position: "top-right",
    });

  return {
    success,
    error,
  };
};

export default useNotification;
