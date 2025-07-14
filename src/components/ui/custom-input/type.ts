type BaseProps = {
  label: string;
  inputWidth?: string | number;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  BaseProps & {
    isTextArea?: false;
  };

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  BaseProps & {
    isTextArea: true;
  };

export type CustomInputProps = InputProps | TextAreaProps;
