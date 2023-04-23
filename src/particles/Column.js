import styled from 'styled-components';

const Column = styled.div`
  width: ${(props) => 100 * props.width}%; 
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  &:first-child {
    padding-left: 0px;
  }
  &:last-child {
    padding-right: 0px;
  }
`;

export default Column;
