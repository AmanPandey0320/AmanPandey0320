import Button from "../../shared/button";
import HtmlTag from "../../shared/htmlTags";
import { Tag } from "../../shared/htmlTags/styles";
import Text from "../../shared/Text";
import WobblyText from "../../shared/wobbleText";
import { Wrapper, Item, Image } from "./styles";
import data from "../../../config/data";
import { PageWrapper } from "../../shared/wrapper";

/**
 *
 * @param props
 * @returns
 */
const Home = (props: any) => {
  return (
    <div id="home">
      <PageWrapper className="h">
        <HtmlTag name="html">
          <HtmlTag name="body">
            <HtmlTag name="section" close={true}>
              <Wrapper>
                <Item>
                  <HtmlTag name="h1">
                    <WobblyText text="Hi!," />
                    <WobblyText text="I'm   Aman." />
                    <Tag width={400} textAlign="right">{`</h1>`}</Tag>
                    <HtmlTag close={true} name="p">
                      <Text
                        className="shrink"
                        font="Titillium Web"
                        size="16px"
                        color="#8f8f8f"
                      >
                        Learning to solve problems and build awesome
                        applications
                      </Text>
                    </HtmlTag>
                    <HtmlTag
                      name="button"
                      attr={`onclick="contactme()"`}
                      close={true}
                      variant="inline"
                      hide={true}
                    >
                      <Button variant="animated">GET IN TOUCH</Button>
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
          </HtmlTag>
        </HtmlTag>
      </PageWrapper>
    </div>
  );
};
export default Home;
