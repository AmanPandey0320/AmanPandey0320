import data from "../../../config/data";
import Grid from "../../shared/grid";
import HtmlTag from "../../shared/htmlTags";
import Text from "../../shared/Text";
import WobblyText from "../../shared/wobbleText";
import { PageWrapper } from "../../shared/wrapper";
import { EduItem, EduWrapper } from "./styles";

const Education = () => {
  return (
    <PageWrapper className="h">
      <HtmlTag name="section" close={true}>
        <WobblyText small={true} text="Education" />
        <EduWrapper>
          <Grid.Row justify="space-evenly">
            {data.education.map((edu) => (
              <Grid.Item key={edu.key}>
                <EduItem>
                  <Text
                    font="Titillium Web"
                    size="16px"
                    weight="500"
                    align="left"
                  >
                    {edu.exam}
                  </Text>
                  <Text size="14px" color="#636363" align="left">
                    {edu.school}
                  </Text>
                  <br />
                  <Grid.Row justify="space-between">
                    <Grid.Item>
                      <Text size="11px" color="#636363" component="span">
                        {edu.start} - {edu.to}
                      </Text>
                    </Grid.Item>
                    <Grid.Item>
                      <Text size="11px" color="#636363" component="span">
                        {edu.result.cb ? (
                          <>
                            {edu.result.res} (till&nbsp;{edu.result.till}
                            <sup>{edu.result.sup}</sup>&nbsp;{edu.result.type})
                          </>
                        ) : (
                          <>{edu.result.res}</>
                        )}
                      </Text>
                    </Grid.Item>
                  </Grid.Row>
                </EduItem>
              </Grid.Item>
            ))}
          </Grid.Row>
        </EduWrapper>
      </HtmlTag>
    </PageWrapper>
  );
};

export default Education;
