/*
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-28 15:02:27
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-30 17:02:50
 * @FilePath: \admin\src\env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare module '@arco-design/color' {
  interface ColorValue {
    primary: string
    [key: string]: string
  }

  export function getPresetColors(): Record<string, ColorValue>
  export function getRgbStr(color: string): string
  export function generate(
    color: string,
    options?: {
      theme?: 'dark' | 'default'
      format?: 'hex' | 'rgb'
    }
  ): string[]
}
