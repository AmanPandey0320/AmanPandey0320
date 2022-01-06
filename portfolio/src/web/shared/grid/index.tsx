import { ColFlex, ItemFlex, RowFlex } from "./styles";
import { FlexContainerProps, FlexItemProps } from "./types";

/**
 *
 * @param param0
 * @returns
 */
const Row = ({ children, ...props }: FlexContainerProps) => {
  return <RowFlex {...props}>{children}</RowFlex>;
};

/**
 *
 * @param param0
 * @returns
 */
const Col = ({ children, ...props }: FlexContainerProps) => {
  return <ColFlex {...props}>{children}</ColFlex>;
};

/**
 *
 * @param param0
 * @returns
 */
const Item = ({ children, ...props }: FlexItemProps) => {
  return <ItemFlex {...props}>{children}</ItemFlex>;
};

const Grid = { Row, Col, Item };
export default Grid;
