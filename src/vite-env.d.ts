/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_META_PIXEL_HOME?: string
  readonly VITE_META_PIXEL_CHILD_DEVELOPMENT?: string
  readonly VITE_META_PIXEL_PREGNANCY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

