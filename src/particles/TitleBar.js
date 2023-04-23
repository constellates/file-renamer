import styled from 'styled-components';
import { grey } from './colors';

const TitleBar = styled.div`
  background-color: ${grey[6]};
  border-bottom: 1px solid ${grey[10]};
  height: 38px;
  width: 100%;
  -webkit-app-region: drag;
  position: fixed;
`;

export default TitleBar;
