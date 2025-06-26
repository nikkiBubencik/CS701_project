
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/CS701_project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/CS701_project"
  },
  {
    "renderMode": 2,
    "route": "/CS701_project/search"
  },
  {
    "renderMode": 2,
    "route": "/CS701_project/readingLists"
  },
  {
    "renderMode": 1,
    "route": "/CS701_project/readingList/*"
  },
  {
    "renderMode": 1,
    "route": "/CS701_project/book/*"
  },
  {
    "renderMode": 2,
    "route": "/CS701_project/add"
  },
  {
    "renderMode": 1,
    "route": "/CS701_project/edit/*"
  },
  {
    "renderMode": 1,
    "route": "/CS701_project/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 702, hash: 'a8b4b4780f829d6d6133cb5b1a8b52132c29478d1cdfcb2ea1c3659fbd8f85d8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: 'f5c2bc42be0f665b334c8fa3afbfc92dde26c2a9649f760165617c077d207036', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3405, hash: 'c02bba9564f4e2eef1f706a5c758eac6ca3a5d447ea04486af2c7870181c5be9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'search/index.html': {size: 3810, hash: '6c70e77f7b4ea5f6fc8bc31359ac3330c9cd3950c5211c2c6a9aec6893453f33', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'readingLists/index.html': {size: 3308, hash: 'f299ad48a4edd59da940357d47ebab56f65e4dd00605e5cdfab841a4719892ac', text: () => import('./assets-chunks/readingLists_index_html.mjs').then(m => m.default)},
    'add/index.html': {size: 3346, hash: '568112143c6fb3ede2a6bafca215cb49e42217c905ea24d8aa589fcc8f92c3cd', text: () => import('./assets-chunks/add_index_html.mjs').then(m => m.default)},
    'styles-DC7VQKHW.css': {size: 75, hash: 'Nqj9yR3pnd8', text: () => import('./assets-chunks/styles-DC7VQKHW_css.mjs').then(m => m.default)}
  },
};
