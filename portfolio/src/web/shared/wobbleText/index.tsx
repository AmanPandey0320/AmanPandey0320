import { WobbleText, WobbleWrapper } from "./styles";
import { WobbleProps } from "./types";

const WobblyText = (props: WobbleProps) => {
  const { text } = props;
  return (
    <WobbleWrapper>
      {text.split("").map((ch, i) => (
        <WobbleText pos={i} key={i}>
          {ch}
        </WobbleText>
      ))}
    </WobbleWrapper>
  );
};

export default WobblyText;
