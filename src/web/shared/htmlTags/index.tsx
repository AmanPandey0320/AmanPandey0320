import { Tag, TagWrapper, TagSpan } from "./styles";
import { HtmlTagProps } from "./types";

const HtmlTag = (props: HtmlTagProps) => {
  const { variant, attr, name, children, close, hide, autoClose } = props;
  if (variant === "inline") {
    return (
      <div>
        <TagSpan hide={hide}>{`<${name} ${attr ? attr : ""} ${
          autoClose ? "/ >" : ">"
        }`}</TagSpan>
        &nbsp;
        <>{children}</>
        &nbsp;
        {close && !autoClose && <TagSpan hide={hide}>{`</${name}>`}</TagSpan>}
      </div>
    );
  }
  return (
    <div>
      <Tag hide={hide}>
        {`<${name} ${attr ? attr : ""} ${autoClose ? "/ >" : ">"}`}&nbsp;
      </Tag>
      <TagWrapper>{children}</TagWrapper>
      {close && !autoClose && <Tag hide={hide}>{`</${name}>`}</Tag>}
    </div>
  );
};

export default HtmlTag;
