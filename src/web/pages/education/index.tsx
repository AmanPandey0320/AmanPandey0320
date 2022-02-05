// import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../../../config/data";
import Grid from "../../shared/grid";
import HtmlTag from "../../shared/htmlTags";
import Text from "../../shared/Text";
import WobblyText from "../../shared/wobbleText";
import { PageWrapper } from "../../shared/wrapper";
import {
  AnimatedContainer,
  AnimationWrapper,
  EduItem,
  EduWrapper,
} from "./styles";

const Education = () => {

  const { ref, inView } = useInView();

  return (
    <div id="education">
      <PageWrapper className="h">
        <HtmlTag name="section" close={true}>
          <WobblyText small={true} text="Education" />
          <EduWrapper ref={ref}>
            <Grid.Row justify="space-evenly">
              {data.education.map((edu) => (
                <Grid.Item key={edu.key}>
                  <AnimationWrapper
                    className={inView ? "visible" : "in-visible"}
                  >
                    <EduItem>
                      <Text
                        font="Titillium Web"
                        size="18px"
                        weight="500"
                        align="left"
                      >
                        {edu.exam}
                      </Text>
                      <Text size="15px" color="#636363" align="left">
                        {edu.school}
                      </Text>
                      <br />
                      <Grid.Row justify="space-between">
                        <Grid.Item>
                          <Text size="12px" color="#999999" component="span">
                            {edu.start} - {edu.to}
                          </Text>
                        </Grid.Item>
                        <Grid.Item>
                          <Text size="12px" color="#999999" component="span">
                            {edu.result.cb ? (
                              <>
                                {edu.result.res} (till&nbsp;{edu.result.till}
                                <sup>{edu.result.sup}</sup>&nbsp;
                                {edu.result.type})
                              </>
                            ) : (
                              <>{edu.result.res}</>
                            )}
                          </Text>
                        </Grid.Item>
                      </Grid.Row>
                    </EduItem>
                  </AnimationWrapper>
                </Grid.Item>
              ))}
            </Grid.Row>
            <AnimatedContainer></AnimatedContainer>
          </EduWrapper>
        </HtmlTag>
      </PageWrapper>
    </div>
  );
};

export default Education;
