import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';
import FileTable from './components/file-table';
import {
  Background,
  Button,
  Column,
  ColumnContainer,
  Icon,
  MainContainer,
  ProgressBar,
  TitleBar,
} from './particles';

function ExampleComponent() {
  const [files, setFiles] = React.useState([]);
  const [completed, setCompleted] = React.useState(0);

  const stateRef = React.useRef();
  stateRef.files = files;

  const handleClick = React.useCallback(async () => {
    const selectedFiles = await window.electron.openFile();
    const mappedFiles = selectedFiles.map((filePath) => {
      const parts = filePath.split('/');
      const fileName = parts.pop();
      const extension = fileName.split('.')[1];
      const basePath = `${parts.join('/')}`;
      const id = uuidv4();

      return {
        basePath,
        from: fileName,
        to: `${id}.${extension}`,
      };
    });
    setFiles(mappedFiles);
  });

  const handleConfirm = React.useCallback(async () => {
    window.electron.renameFiles(files);
  });

  const cancel = React.useCallback(() => {
    setFiles([]);
  });

  React.useEffect(() => window.electron.ipcRenderer.on('fileRenameProgress', (value) => {
    setCompleted(value);
    if (value === stateRef.files.length) {
      setFiles([]);
    }
  }), []);

  return (
    <Background>
      <TitleBar />
      <MainContainer>
        <ColumnContainer>
          {files.length === 0 && (
            <Column width={1}>
              <Button onClick={handleClick}>
                Select Files <Icon name='file-import' />
              </Button>
            </Column>
          )}
          {files.length > 0 && (
            <Column width={1/2}>
              <Button onClick={cancel}>
                Cancel <Icon name='circle-xmark' regular />
              </Button>
            </Column>
          )}
          {files.length > 0 && (
            <Column width={1/2}>
              <Button onClick={handleConfirm}>
                Confirm <Icon name='circle-check' regular />
              </Button>
            </Column>
          )}
        </ColumnContainer>
        {files.length > 0 && (
          <ProgressBar percentComplete={completed / files.length} />
        )}
        {/* {files.length > 0 && (
          <h2>Base Path: {files[0].basePath}</h2>
        )} */}
        {files.length > 0 && (
          <FileTable files={files} />
        )}
      </MainContainer>
    </Background>
  );
}

function render() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <ExampleComponent />
    </React.StrictMode>,
  );
}

render();
