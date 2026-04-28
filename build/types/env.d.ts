// build/types/env.d.ts
export interface ViteEnv {
  VITE_APP_TITLE?: string
  VITE_PORT?: number
  VITE_PUBLIC_PATH?: string
  VITE_PROXY?: [string, string][]
  [key: string]: any
}

export interface EnvOptions {
  [key: string]: string | undefined
}
