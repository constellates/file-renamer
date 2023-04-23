import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { grey } from './colors';

const Outline = styled.div`
  height: 10px;
  width: 100%;
  background-color: ${grey[8]}
`;

const Progress = styled.div`
  height: 10px;
  width: ${(props) => 100 * props.percentComplete}%;
  background-color: ${grey[12]}
`;

function ProgressBar({ percentComplete = 0 }) {
  return (
    <Outline>
      <Progress percentComplete={percentComplete} />
    </Outline>
  );
}

ProgressBar.propTypes = {
  percentComplete: PropTypes.number,
};

export default ProgressBar;
