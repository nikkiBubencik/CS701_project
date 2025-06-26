
export default {
  basePath: 'https://github.com/nikkiBubencik/CS701_project',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
