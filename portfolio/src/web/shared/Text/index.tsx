import { P, Span } from "./styles";
import { TextProps } from "./types";

const Text = (props: TextProps) => {
  const { children, component, ...rest } = props;
  if (component === "span") {
    return <Span {...rest}>{children}</Span>;
  }
  return <P {...rest}>{children}</P>;
};

export default Text;
