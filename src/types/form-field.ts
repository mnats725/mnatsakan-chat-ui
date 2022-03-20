export type FormField<T> = {
  type: string;
  name: keyof T;
  placeholder: string;
};
