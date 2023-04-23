import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { grey } from '../particles/colors';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  position: relative;
  margin-top: 20px;
`;

const TableHead = styled.thead`
  font-weight: bold;
`;

const TableBody = styled.tbody`
  width: 100%;
`;

const TableRow = styled.tr`
  background-color: ${grey[8]};
  color: ${grey[35]};
  &:nth-child(even) {
    background-color: ${grey[10]};
  }
`;

const TableColumn = styled.td`
  padding: 8px;
`;

function FileTable({ files = [] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableColumn>From</TableColumn>
          <TableColumn><i className='fas fa-arrow-right' /></TableColumn>
          <TableColumn>To</TableColumn>
        </TableRow>
      </TableHead>
      <TableBody>
        {files.map((file) => (
          <TableRow key={file.to}>
            <TableColumn>{file.from}</TableColumn>
            <TableColumn><i className='fas fa-arrow-right' /></TableColumn>
            <TableColumn>{file.to}</TableColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

FileTable.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ),
};

export default FileTable;
