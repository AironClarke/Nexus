import Head from 'next/head';
import packageJson from 'package.json';
import type { FC } from 'react';
import type { MetadataProps } from 'types/components/pages/Metadata';

const MetaData: FC<MetadataProps> = ({
  description = packageJson.description,
  title = packageJson.name
}) => (
  <Head>
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
);

export default MetaData;
