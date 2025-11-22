import { MotionHeadingProps, MotionParagraphProps } from "../custom-text/type";

export type SectionTitleProps = MotionParagraphProps &
  MotionHeadingProps & {
    containerStyle?: React.CSSProperties;
    textStyle?: React.CSSProperties;
    color?: string;
  };
