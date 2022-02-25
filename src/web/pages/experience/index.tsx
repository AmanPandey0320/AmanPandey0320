// import { useInView } from "react-intersection-observer";
import { useInView } from "react-intersection-observer";
import HtmlTag from "../../shared/htmlTags";
import { Tag } from "../../shared/htmlTags/styles";
import WobblyText from "../../shared/wobbleText";
import { PageWrapper } from "../../shared/wrapper";
import { ExpBody, ExpHeading, ExpItem, ExpWrapper } from "./style";
import data from "../../../config/data";
import Grid from "../../shared/grid";
import ReactTooltip from "react-tooltip";
import { ScaleAllAnimation } from "../../shared/animation/scale";
import { SpinAnimation } from "../../shared/animation/spin";
import { Alink } from "../../shared/link";
import Text from "../../shared/Text";
import { AiOutlineLink } from "react-icons/ai";

const Experience = () => {
  const { ref, inView } = useInView();
  const { ref: refSkill, inView: inViewSkill } = useInView();

  return (
    <div id="experience">
      <PageWrapper className="h">
        <HtmlTag name="section" close={true}>
          <HtmlTag name="h1">
            <WobblyText small={true} text="Experience" />
            <Tag width={400} textAlign="right">{`</h1>`}</Tag>
          </HtmlTag>
          <ExpWrapper ref={ref}>
            <Grid.Row>
              {data.experience.map((e) => (
                <Grid.Item key={e.key}>
                  <ScaleAllAnimation
                    from={0}
                    to={1}
                    easeIn={true}
                    className={inView ? "visible" : "in-visible"}
                  >
                    <ExpItem ref={refSkill}>
                      <Grid.Col alignItems="space-between">
                        <div>
                          <ExpHeading>
                            <Grid.Row justify="space-between">
                              <Grid.Item>{e.title}</Grid.Item>
                              {e.link && (
                                <Grid.Item>
                                  <Alink target="_blank" href={e.link}>
                                    <Text
                                      data-for="exp"
                                      data-iscapture="true"
                                      data-tip="Visit link"
                                      color="rgba(138, 25, 255, 1)"
                                      component="span"
                                    >
                                      <AiOutlineLink color="rgba(138, 25, 255, 1)" />
                                    </Text>
                                  </Alink>
                                </Grid.Item>
                              )}
                            </Grid.Row>
                          </ExpHeading>
                          <ExpBody>{e.desc}</ExpBody>
                        </div>
                        <div>
                          <Grid.Row>
                            {e.techStack.map((ts) => (
                              <Grid.Item
                                data-tip={data.skillsObj[ts]?.name}
                                data-for="exp"
                                data-iscapture="true"
                                key={ts}
                              >
                                <SpinAnimation
                                  easeIn={true}
                                  from={360}
                                  to={0}
                                  className={
                                    inViewSkill ? "visible" : "in-visible"
                                  }
                                >
                                  <img
                                    height="32px"
                                    width="32px"
                                    src={data.skillsObj[ts]?.image}
                                    alt={data.skillsObj[ts]?.name}
                                  />
                                </SpinAnimation>
                              </Grid.Item>
                            ))}
                          </Grid.Row>
                        </div>
                      </Grid.Col>
                    </ExpItem>
                  </ScaleAllAnimation>
                </Grid.Item>
              ))}
            </Grid.Row>
          </ExpWrapper>
        </HtmlTag>
      </PageWrapper>
      <ReactTooltip place="bottom" type="light" effect="float" id="exp" />
    </div>
  );
};

export default Experience;
