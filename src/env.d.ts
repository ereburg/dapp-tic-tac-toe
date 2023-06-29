interface ImportMetaEnv {
  readonly VITE_NODE_ADDRESS: string
  readonly VITE_GAME_ADDRESS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
