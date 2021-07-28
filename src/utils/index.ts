import path from 'path'
import { isExternal } from './validate'

/**
 *
 * @param {basePath} 上级path
 * @param {routePath} 本级path
 * @returns {String} 路由跳转完整 path
 */
export function resolvePath(basePath: string, routePath: string): string {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(basePath)) {
    return basePath
  }
  return path.resolve(basePath, routePath)
}
