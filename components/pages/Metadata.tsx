import Head from 'next/head';
import packageJson from 'package.json';
import type { MetadataProps } from 'types/components/pages/Metadata';

const MetaData = ({
  description = packageJson.description,
  title = packageJson.name
}: MetadataProps): JSX.Element => (
  <Head>
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
);

export default MetaData;
