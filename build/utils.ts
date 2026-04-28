import type { ProxyOptions } from 'vite'

interface EnvOptions {
  [key: string]: string | undefined
}

interface ViteEnv {
  VITE_PORT?: number
  VITE_PUBLIC_PATH?: string
  VITE_PROXY?: [string, string][]
  [key: string]: any
}

const httpsReg = /^https:\/\//

export function wrapperEnv(envOptions: EnvOptions): ViteEnv {
  if (!envOptions) return {}
  const rst: ViteEnv = {}

  for (const key in envOptions) {
    let val: any = envOptions[key]
    if (['true', 'false'].includes(val)) {
      val = val === 'true'
    }
    if (['VITE_PORT'].includes(key)) {
      val = +val
    }
    if (key === 'VITE_PROXY' && val) {
      try {
        val = JSON.parse(val.replace(/'/g, '"'))
      } catch (error) {
        val = ''
      }
    }
    rst[key] = val
    if (typeof key === 'string') {
      process.env[key] = val
    } else if (typeof key === 'object') {
      process.env[key] = JSON.stringify(val)
    }
  }
  return rst
}

// 封装创建代理
export function createProxy(list: [string, string][] = []): Record<string, ProxyOptions> {
  const rst: Record<string, ProxyOptions> = {}
  for (const [prefix, target] of list) {
    const isHttps = httpsReg.test(target)

    // https://github.com/http-party/node-http-proxy#options
    rst[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path: string) => path.replace(new RegExp(`^${prefix}`), ''),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {}),
    }
  }
  return rst
}