import Button from "../../shared/button";
import HtmlTag from "../../shared/htmlTags";
import { Tag } from "../../shared/htmlTags/styles";
import Text from "../../shared/Text";
import WobblyText from "../../shared/wobbleText";
import { Wrapper, Item, Image } from "./styles";
import data from "../../../config/data";
import { PageWrapper } from "../../shared/wrapper";
import constants from "../../../assets/constant";

/**
 *
 * @param props
 * @returns
 */
const Home = (props: any) => {
  return (
    <div id="home">
      <PageWrapper className="h">
      <HtmlTag name="section" close={true}>
              <Wrapper>
                <Item>
                  <HtmlTag name="h1">
                    <WobblyText text="WELCOME" />
                    <WobblyText text="TO THE HUB" />
                    <Tag width={400} textAlign="right">{`</h1>`}</Tag>
                    <HtmlTag close={true} name="p">
                      <Text
                        className="shrink"
                        font="Roboto"
                        size="16px"
                        color={constants.color.foreground}
                      >
                        of a learner building solutions and solving puzzles bit by bit
                      </Text>
                    </HtmlTag>
                    <HtmlTag
                      name="button"
                      attr={`onclick="contactme()"`}
                      close={true}
                      variant="inline"
                      hide={true}
                    >
                      <Button variant="contained">GET IN TOUCH</Button>
                    </HtmlTag>
                  </HtmlTag>
                </Item>
                <Item>
                  <HtmlTag variant="inline" autoClose={true} name="img">
                    <Image src={data.constants.images.AVATAR} alt="hello" />
                  </HtmlTag>
                </Item>
              </Wrapper>
            </HtmlTag>
      </PageWrapper>
    </div>
  );
};
export default Home;
