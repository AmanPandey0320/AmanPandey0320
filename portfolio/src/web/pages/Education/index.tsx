import HtmlTag from "../../shared/htmlTags";
import WobblyText from "../../shared/wobbleText";
import { PageWrapper } from "../../shared/wrapper";

const Education = () => {
  return (
    <PageWrapper className="h">
      <HtmlTag name="section" close={true}>
        <WobblyText small={true} text="Education" />
      </HtmlTag>
    </PageWrapper>
  );
};

export default Education;
