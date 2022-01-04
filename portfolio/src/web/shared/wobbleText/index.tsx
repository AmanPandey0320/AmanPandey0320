import { WobbleText, WobbleWrapper } from "./styles";
import { WobbleProps } from "./types";

const WobblyText = (props: WobbleProps) => {
  const { text, small } = props;
  return (
    <WobbleWrapper>
      {text.split("").map((ch, i) => (
        <WobbleText className={small ? "small" : ""} pos={i} key={i}>
          {ch}
        </WobbleText>
      ))}
    </WobbleWrapper>
  );
};

export default WobblyText;
