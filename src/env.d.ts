/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE?: string;
  readonly VITE_USE_BROWSER_ROUTER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
