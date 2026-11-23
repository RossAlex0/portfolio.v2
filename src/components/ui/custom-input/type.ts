type BaseProps = {
  label: string;
  isTextArea?: boolean;
  value: string;
  setValue: (value: string) => void;
};

export type CustomInputProps = BaseProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
