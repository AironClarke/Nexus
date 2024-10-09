import StyledFileEntry from 'styles/components/system/Files/StyledFileEntry';

export type FileEntryProps = {
  name: string;
  icon: string;
};

export const FileEntry = ({ name, icon }: FileEntryProps): JSX.Element => (
  <StyledFileEntry>
    <button type="button">
      <figure>
        <img src={icon} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </button>
  </StyledFileEntry>
);

export default FileEntry;
