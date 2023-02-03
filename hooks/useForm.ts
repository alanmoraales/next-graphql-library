import { useState, BaseSyntheticEvent } from "react";
import {
  useForm as useHookForm,
  Resolver,
  FieldValues,
  DefaultValues,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import useNotification from "./useNotification";

interface IFormMethods<T extends FieldValues>
  extends Omit<UseFormReturn<T>, "handleSubmit"> {
  submit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  isSubmitting: boolean;
}

interface IUseForm<T extends FieldValues> {
  resolver?: Resolver<T, object>;
  onSubmit: SubmitHandler<T>;
  onSuccess?: () => void;
  successMessage?: string;
  defaultValues?: DefaultValues<T>;
  resetAfterSuccessSubmit?: boolean;
  displaySuccessMessage?: boolean;
}

const useForm = <T extends FieldValues>({
  resolver,
  onSubmit,
  onSuccess = () => {},
  successMessage = "",
  defaultValues,
  resetAfterSuccessSubmit = true,
  displaySuccessMessage = true,
}: IUseForm<T>): IFormMethods<T> => {
  const { handleSubmit, reset, ...restOfValues } = useHookForm<T>({
    resolver,
    defaultValues,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const notify = useNotification();

  const submit = handleSubmit(async (values) => {
    try {
      setIsSubmitting(true);
      await onSubmit(values);
      if (resetAfterSuccessSubmit) {
        reset();
      }
      if (displaySuccessMessage) {
        notify.success({
          description: successMessage,
        });
      }
      onSuccess();
    } catch (error: any) {
      notify.error({
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  });

  return {
    submit,
    isSubmitting,
    reset,
    ...restOfValues,
  };
};

export default useForm;
