import useMediaQuery from "../../../lib/useMediaQuery";
import HtmlTag from "../../shared/htmlTags";
import { Tag } from "../../shared/htmlTags/styles";
import WobblyText from "../../shared/wobbleText";
import { PageWrapper } from "../../shared/wrapper";
import DeskTopView from "./views/desktop";
import MobileView from "./views/mobile";

const Education = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div id="education">
      <PageWrapper className="h">
        <HtmlTag name="section" close={true}>
          <HtmlTag name="h1">
            <WobblyText small={true} text="Education" />
            <Tag width={400} textAlign="right">{`</h1>`}</Tag>
          </HtmlTag>
          {isMobile ? <MobileView /> : <DeskTopView/>}
          {/* <HtmlTag name="p" close={true}>
            <div ref={refSkill}>
              <Grid.Row>
                {data.skills
                  .filter((sk) => sk.show)
                  .map((skill) => (
                    <Grid.Item
                      data-tip={skill.name}
                      data-for="skill"
                      data-iscapture="true"
                      key={skill.key}
                    >
                      <SpinAnimation
                        easeIn={true}
                        from={360}
                        to={0}
                        className={inViewSkill ? "visible" : "in-visible"}
                      >
                        <img
                          src={skill.image}
                          height="48px"
                          width="48px"
                          alt={skill.name}
                        />
                      </SpinAnimation>
                    </Grid.Item>
                  ))}
              </Grid.Row>
            </div>
            <ReactTooltip
              place="bottom"
              type="light"
              effect="float"
              id="skill"
            />
          </HtmlTag> */}
        </HtmlTag>
      </PageWrapper>
    </div>
  );
};

export default Education;
