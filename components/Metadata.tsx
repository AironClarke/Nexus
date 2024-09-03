import Head from 'next/head';
import {
  description as packageDescription,
  name as packageName
} from 'package.json';
import type { FC } from 'react';
import type { MetadataProps } from 'types/pages/Metadata';

const MetaData: FC<MetadataProps> = ({
  description = packageDescription,
  title = packageName
}) => (
  <Head>
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
);

export default MetaData;
