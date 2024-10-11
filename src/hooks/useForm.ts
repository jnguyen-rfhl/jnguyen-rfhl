import {
  useForm as useRHForm,
  UseFormProps,
  FieldValues,
} from 'react-hook-form';

export function useForm<TFieldValues extends FieldValues = FieldValues>(
  props: UseFormProps<TFieldValues> = {},
) {
  const formReturn = useRHForm<TFieldValues>({
    reValidateMode: 'onChange',
    mode: 'all',
    ...props,
  });

  const {
    formState: { touchedFields, errors: rawErrors },
  } = formReturn;

  const visibleErrors = { ...rawErrors };

  for (const key in visibleErrors) {
    if (!(touchedFields as Record<string, boolean>)[key]) {
      delete visibleErrors[key];
    }
  }

  return {
    ...formReturn,
    visibleErrors,
  };
}
