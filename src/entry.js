import { front } from './frontend.js';

// Paint the loading screen before building the world and compiling shaders.
requestAnimationFrame(() => setTimeout(async () => {
  const engine = new URLSearchParams(location.search).get('renderer') || localStorage.getItem('echo.renderer') || 'auto';
  if (navigator.gpu && engine !== 'webgl') {
    try {
      const module = await import('./webgpu/pipeline.js');
      window.__echoBackend = { module, backend: await module.createWebGPUBackend() };
    } catch (error) { console.warn('WebGPU initialization failed; using WebGL.', error); }
  }
  import('./main.js').catch((error) => {
    console.error('Game initialization failed', error);
    front.fail('Не удалось запустить игру. Проверьте поддержку WebGL 2 и обновите страницу.', () => location.reload());
  });
}, 0));
