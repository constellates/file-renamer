import styled from 'styled-components';
import { grey } from './colors';

const Button = styled.button`
  background-color: ${grey[8]};
  color: ${grey[35]};
  width: 100%;
  border: none;
  font-size: 24px;
  padding: 20px;
  margin-bottom: 20px;
  &:hover {
    background-color: ${grey[10]};
  }
  &:active {
    background-color: ${grey[12]};
  }
`;

export default Button;
