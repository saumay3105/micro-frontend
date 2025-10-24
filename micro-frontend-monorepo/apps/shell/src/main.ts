import { setRemoteDefinitions } from '@nx/react/module-federation';

fetch('/assets/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap'))
  .catch((err) => {
    console.error('Error loading remote entries', err);
    import('./bootstrap');
  });
