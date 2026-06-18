import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'SAN & Associates CMS',
  basePath: '/studio',

  projectId: 'rplldv3y',
  dataset: 'production',

  // Ensure structureTool is used instead of deprecated deskTool
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
