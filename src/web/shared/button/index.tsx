import { Animated, Contained, Outlined, Text } from "./styles";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const { variant, children, onClick: handler } = props;
  if (variant === "contained") {
    return <Contained onClick={handler}>{children}</Contained>;
  }
  if (variant === "outlined") {
    return <Outlined onClick={handler}>{children}</Outlined>;
  }
  if (variant === "animated") {
    return <Animated onClick={handler}>{children}</Animated>;
  }
  return <Text onClick={handler}>{children}</Text>;
};
export default Button;
