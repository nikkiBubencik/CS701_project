
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/nikkiBubencik/CS701_project/',
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
    'index.csr.html': {size: 734, hash: 'a5514b531dc0d83afc0b9f97ed69468d471e8f10d293d19beb39f94f72000273', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1063, hash: '6ea452d2fe27015179bf0dcd2da6cb6a1a60bb40719ca573c5941b545f6707ff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'search/index.html': {size: 3938, hash: '9d15eb4d26d6ccaad4e96a5fd69fd66ae697c1d6b92aa6a10cd305bf8f00ba0f', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3597, hash: '912420e169e9e57d6839198bf990ae498cf1569a69cbbf11c45ccd9241f10e8b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'readingLists/index.html': {size: 3468, hash: 'de4f15de74aaf23ce2060944785e8816f05d8e92b8a90e3af5a676eaa2aa72d5', text: () => import('./assets-chunks/readingLists_index_html.mjs').then(m => m.default)},
    'add/index.html': {size: 3474, hash: '10944b622e0a2c8a6057a3ec6e9247e28fffd87abb5b19e060258ebe3ca9f76a', text: () => import('./assets-chunks/add_index_html.mjs').then(m => m.default)},
    'styles-DC7VQKHW.css': {size: 75, hash: 'Nqj9yR3pnd8', text: () => import('./assets-chunks/styles-DC7VQKHW_css.mjs').then(m => m.default)}
  },
};
