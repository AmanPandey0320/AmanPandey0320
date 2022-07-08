import styled from "styled-components";

interface CircularImageProps {
  children?: any;
  radius: number;
  src: string;
  alt?: string;
}

interface WrapperProps {
  radius: number;
}

const Wrapper = styled.div<WrapperProps>`
  height: ${(props) => props.radius + 18}px;
  width: ${(props) => props.radius + 18}px;
  border: 4px solid #8a19ff;
  border-radius: ${(props) => props.radius + 18}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img<WrapperProps>`
  width: ${(props) => props.radius}px;
  height: ${(props) => props.radius}px;
  border-radius: ${(props) => props.radius}px;
`;

function CircularImage(props: CircularImageProps) {
  return (
    <Wrapper radius={props.radius}>
      <Image radius={props.radius} src={props.src} alt={props.alt} />
    </Wrapper>
  );
}

export default CircularImage;
