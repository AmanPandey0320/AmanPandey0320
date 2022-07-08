import { Container, Grid, Typography } from "@mui/material";
import constants from "../../../assets/constant";
import CircularImage from "../../shared/circularImage";
import HtmlTag from "../../shared/htmlTags";
import { Tag } from "../../shared/htmlTags/styles";
import WobblyText from "../../shared/wobbleText";
import { PageWrapper } from "../../shared/wrapper";
import { GoPrimitiveDot } from "react-icons/go";

function AboutMe(props: any) {
  return (
    <div id="about-me">
      <PageWrapper className="h">
        <HtmlTag name="section" close={true}>
          <HtmlTag name="h1">
            <WobblyText small={true} text="About Me" />
            <Tag width={400} textAlign="right">{`</h1>`}</Tag>
          </HtmlTag>
          <br/>
          <Container>
            <Grid container alignItems={"center"} direction={"row"}>
              <Grid item xs={12} sm={4}>
                <CircularImage
                  radius={216}
                  alt={"aman"}
                  src={constants.images.AMAN}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <HtmlTag name="p" close={true}>
                  <Typography color={constants.color.textPri}>
                    Hi! I'm Aman, a final year Computer Science undergraduate
                    student at National Institute of Technology, Jamshedpur.
                  </Typography>
                  <br />
                  <Typography color={constants.color.textPri}>
                    I am a self-taught developer who enjoys enhancing his
                    problem solving skills.
                  </Typography>
                  <br />
                  <Typography color={constants.color.textPri}>
                    Here are some of the technologies I've worked with {"&"}{" "}
                    skills I have developed:
                  </Typography>
                  <Container>
                    <Grid container direction={"row"}>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>C++</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>TypeScript</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>SQL</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>React.JS</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>Node.JS</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>MongoDB</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>DSA</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>GIT</Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                  <br />
                  <Typography color={constants.color.textPri}>
                    Other than that, I am also familiar with the following:
                  </Typography>
                  <Container>
                    <Grid container direction={"row"}>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>Linux</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>NGINX</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>AWS</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>Postgres</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <GoPrimitiveDot color={constants.color.text} />
                          &nbsp;<Typography>Docker</Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                </HtmlTag>
              </Grid>
            </Grid>
          </Container>
        </HtmlTag>
      </PageWrapper>
    </div>
  );
}

export default AboutMe;
