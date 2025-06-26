
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/nikkiBubencik/CS701_project',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/nikkiBubencik/CS701_project"
  },
  {
    "renderMode": 2,
    "route": "/nikkiBubencik/CS701_project/search"
  },
  {
    "renderMode": 2,
    "route": "/nikkiBubencik/CS701_project/readingLists"
  },
  {
    "renderMode": 1,
    "route": "/nikkiBubencik/CS701_project/readingList/*"
  },
  {
    "renderMode": 1,
    "route": "/nikkiBubencik/CS701_project/book/*"
  },
  {
    "renderMode": 2,
    "route": "/nikkiBubencik/CS701_project/add"
  },
  {
    "renderMode": 1,
    "route": "/nikkiBubencik/CS701_project/edit/*"
  },
  {
    "renderMode": 1,
    "route": "/nikkiBubencik/CS701_project/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 733, hash: '96c5e6300298f7b9a194976f4b71309124f4dbfe5a63b41ec6845faea2638168', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1062, hash: '89b5558cfbf18dcc53d406da086b9fef13b5f0f691bac556d9dffea4e7cd03ed', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'search/index.html': {size: 3937, hash: 'b31e131ea40c98780c396f7c1fe2258bced5584cc727b4686e1d4c5f50ac7815', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'add/index.html': {size: 3473, hash: '2f56399af0d5a244e6c9b0636ade27c95546ad2b21ea1c5ca457184cd135e1bc', text: () => import('./assets-chunks/add_index_html.mjs').then(m => m.default)},
    'readingLists/index.html': {size: 3467, hash: '132ed4c10dc66497a89b7973e1b265d7bb0ecac8e808acd5dd335adfe928436c', text: () => import('./assets-chunks/readingLists_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3596, hash: '0bcfccf1434b90548c8e3a0be38f52b8713ced70f98e54f2467513b3eda1effb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DC7VQKHW.css': {size: 75, hash: 'Nqj9yR3pnd8', text: () => import('./assets-chunks/styles-DC7VQKHW_css.mjs').then(m => m.default)}
  },
};
