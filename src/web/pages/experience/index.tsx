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

const Experience = () => {
  const { ref } = useInView();
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
                  <ExpItem>
                    <Grid.Col alignItems="space-between">
                      <div>
                        <ExpHeading>{e.title}</ExpHeading>
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
                              <img
                                height="32px"
                                width="32px"
                                src={data.skillsObj[ts]?.image}
                                alt={data.skillsObj[ts]?.name}
                              />
                            </Grid.Item>
                          ))}
                        </Grid.Row>
                      </div>
                    </Grid.Col>
                  </ExpItem>
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
