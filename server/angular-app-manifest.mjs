
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://raymondvalencia.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/experience"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6157, hash: '685f154987cf12082312b648b6830affb7c6db8043a4b8629651a9bf664cad20', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: 'ae25a9e4f28d0af2e36af6e70ee906aed5c6e2243b24ddf0f6256158f07024ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25502, hash: 'bb5dc85938556f25b86948815a70100d04f42a20c87b6fdedfe8ef13d2f19a01', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 30393, hash: 'fe76b6e944591fbe86c96e4d56a8967d843aa8b2ced360c14e1374b4e45041f0', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 26205, hash: '6f281ea06607e68634a5d831c1d71733a874134a20d503c6c68fa15b4ab5d6b5', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-34CS5YIS.css': {size: 312653, hash: 'yFrmu82RabY', text: () => import('./assets-chunks/styles-34CS5YIS_css.mjs').then(m => m.default)}
  },
};
