// import { useInView } from "react-intersection-observer";
import HtmlTag from "../../shared/htmlTags";
import { Tag } from "../../shared/htmlTags/styles";
import WobblyText from "../../shared/wobbleText";
import { PageWrapper } from "../../shared/wrapper";
import {} from "./style";

const Experience = () => {
  return (
    <div id="experience">
      <PageWrapper className="h">
        <HtmlTag name="section" close={true}>
          <HtmlTag name="h1">
            <WobblyText small={true} text="Experience" />
            <Tag width={400} textAlign="right">{`</h1>`}</Tag>
          </HtmlTag>
          
        </HtmlTag>
      </PageWrapper>
    </div>
  );
};

export default Experience;
