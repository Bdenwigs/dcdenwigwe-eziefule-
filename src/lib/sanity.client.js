import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

export const config = {
  dataset: 'production',
  projectId: 'rplldv3y',
  apiVersion: '2023-05-03',
  useCdn: false,
};

export const sanityClient = createClient(config);

const builder = createImageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);
