import FileEntry from 'components/system/Files/FileEntry';
import StyledFileManager from 'styles/components/system/Files/StyledFileManager';

const FileManager = (): JSX.Element => (
  <StyledFileManager>
    <FileEntry name="Hello World" icon="/desktop/testIcon.JPG" />
  </StyledFileManager>
);

export default FileManager;
