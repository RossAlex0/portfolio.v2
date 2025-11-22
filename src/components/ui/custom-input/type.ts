type BaseProps = {
  label: string;
  inputWidth?: string | number;
  isTextArea?: boolean;
  value: string;
  setValue: (value: string) => void;
};

export type CustomInputProps = BaseProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
